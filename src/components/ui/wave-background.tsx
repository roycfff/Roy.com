'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

interface Point {
    x: number
    y: number
    wave: { x: number; y: number }
    cursor: {
        x: number
        y: number
        vx: number
        vy: number
    }
}

interface WavesProps {
    className?: string
    strokeColor?: string
    backgroundColor?: string
    pointerSize?: number
}

export function Waves({
    className = "",
    strokeColor = "#ffffff",
    backgroundColor = "#000000",
    pointerSize = 0.5
}: WavesProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const mouseRef = useRef({
        x: -10,
        y: 0,
        lx: 0,
        ly: 0,
        sx: 0,
        sy: 0,
        v: 0,
        vs: 0,
        a: 0,
        set: false,
        scrollY: 0,
        scrollVelocity: 0,
        lastScrollTime: 0,
    })
    const pathsRef = useRef<SVGPathElement[]>([])
    const linesRef = useRef<Point[][]>([])
    const noiseRef = useRef<((x: number, y: number) => number) | null>(null)
    const rafRef = useRef<number | null>(null)
    const boundingRef = useRef<DOMRect | null>(null)

    // Initialization
    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return

        noiseRef.current = createNoise2D()
        mouseRef.current.scrollY = window.scrollY

        setSize()
        setLines()

        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('scroll', onScroll, { passive: true })
        containerRef.current.addEventListener('touchmove', onTouchMove, { passive: false })

        rafRef.current = requestAnimationFrame(tick)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('scroll', onScroll)
            containerRef.current?.removeEventListener('touchmove', onTouchMove)
        }
    }, [])

    const setSize = () => {
        if (!containerRef.current || !svgRef.current) return

        // Use window dimensions for fixed positioning
        const width = window.innerWidth
        const height = window.innerHeight

        boundingRef.current = { 
            width, 
            height, 
            top: 0, 
            left: 0, 
            right: width, 
            bottom: height,
            x: 0,
            y: 0,
            toJSON: () => ({})
        } as DOMRect

        svgRef.current.style.width = `${width}px`
        svgRef.current.style.height = `${height}px`
    }

    const setLines = () => {
        if (!svgRef.current || !boundingRef.current) return

        const { width, height } = boundingRef.current
        linesRef.current = []

        pathsRef.current.forEach(path => {
            path.remove()
        })
        pathsRef.current = []

        const xGap = 8
        const yGap = 8

        const oWidth = width + 200
        const oHeight = height + 200

        const totalLines = Math.ceil(oWidth / xGap)
        const totalPoints = Math.ceil(oHeight / yGap)

        const xStart = (width - xGap * totalLines) / 2
        const yStart = (height - yGap * totalPoints) / 2

        for (let i = 0; i < totalLines; i++) {
            const points: Point[] = []

            for (let j = 0; j < totalPoints; j++) {
                const point: Point = {
                    x: xStart + xGap * i,
                    y: yStart + yGap * j,
                    wave: { x: 0, y: 0 },
                    cursor: { x: 0, y: 0, vx: 0, vy: 0 },
                }

                points.push(point)
            }

            const path = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            )
            path.classList.add('a__line')
            path.classList.add('js-line')
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', strokeColor)
            path.setAttribute('stroke-width', '1')
            path.setAttribute('opacity', '0.8')

            svgRef.current.appendChild(path)
            pathsRef.current.push(path)

            linesRef.current.push(points)
        }
    }

    const onResize = () => {
        setSize()
        setLines()
    }

    const onMouseMove = (e: MouseEvent) => {
        updateMousePosition(e.pageX, e.pageY)
    }

    const onScroll = () => {
        const mouse = mouseRef.current
        const currentScrollY = window.scrollY
        const currentTime = Date.now()
        const timeDelta = currentTime - mouse.lastScrollTime || 16
        
        const scrollDelta = currentScrollY - mouse.scrollY
        // Reduced scroll velocity calculation for less sensitivity
        mouse.scrollVelocity = (scrollDelta / timeDelta) * 50
        mouse.scrollY = currentScrollY
        mouse.lastScrollTime = currentTime
        
        mouse.vs = Math.min(100, Math.abs(mouse.scrollVelocity) * 1.5)
    }

    const onTouchMove = (e: TouchEvent) => {
        e.preventDefault()
        const touch = e.touches[0]
        updateMousePosition(touch.clientX, touch.clientY)
    }

    const updateMousePosition = (x: number, y: number) => {
        if (!boundingRef.current) return

        const mouse = mouseRef.current
        mouse.x = x
        mouse.y = y

        if (!mouse.set) {
            mouse.sx = mouse.x
            mouse.sy = mouse.y
            mouse.lx = mouse.x
            mouse.ly = mouse.y

            mouse.set = true
        }

        if (containerRef.current) {
            containerRef.current.style.setProperty('--x', `${mouse.sx}px`)
            containerRef.current.style.setProperty('--y', `${mouse.sy}px`)
        }
    }

    const movePoints = (time: number) => {
        const { current: lines } = linesRef
        const { current: mouse } = mouseRef
        const { current: noise } = noiseRef

        if (!noise) return

        lines.forEach((points) => {
            points.forEach((p: Point) => {
                // Reduced scroll influence
                const scrollInfluence = mouse.scrollVelocity * 0.015
                const scrollOffset = mouse.scrollY * 0.0008
                
                // Smooth wave motion
                const move = noise(
                    (p.x + time * 0.005) * 0.003,
                    (p.y + time * 0.002 + scrollOffset) * 0.002
                ) * (5 + Math.abs(scrollInfluence) * 0.8)

                // Gentle wave movement
                p.wave.x = Math.cos(move + scrollOffset) * (6 + Math.abs(scrollInfluence) * 1)
                p.wave.y = Math.sin(move + scrollOffset) * (3 + Math.abs(scrollInfluence) * 0.8) + scrollInfluence * 2

                const dx = p.x - mouse.sx
                const dy = p.y - mouse.sy
                const d = Math.hypot(dx, dy)
                const l = Math.max(140, mouse.vs)

                if (d < l) {
                    const s = 1 - d / l
                    const f = Math.cos(d * 0.001) * s

                    // Very gentle cursor influence
                    p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.0002
                    p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.0002
                }

                // Gentle scroll velocity influence
                p.cursor.vy += mouse.scrollVelocity * 0.0008

                p.cursor.vx += (0 - p.cursor.x) * 0.02
                p.cursor.vy += (0 - p.cursor.y) * 0.02

                p.cursor.vx *= 0.97
                p.cursor.vy *= 0.97

                p.cursor.x += p.cursor.vx
                p.cursor.y += p.cursor.vy

                // Limited displacement
                p.cursor.x = Math.min(40, Math.max(-40, p.cursor.x))
                p.cursor.y = Math.min(40, Math.max(-40, p.cursor.y))
            })
        })
        
        // Smooth decay
        mouse.scrollVelocity *= 0.95
    }

    const moved = (point: Point, withCursorForce = true) => {
        const coords = {
            x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
            y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0),
        }

        return coords
    }

    const drawLines = () => {
        const { current: lines } = linesRef
        const { current: paths } = pathsRef

        lines.forEach((points, lIndex) => {
            if (points.length < 2 || !paths[lIndex]) return;

            const firstPoint = moved(points[0], false)
            let d = `M ${firstPoint.x} ${firstPoint.y}`

            for (let i = 1; i < points.length; i++) {
                const current = moved(points[i])
                d += `L ${current.x} ${current.y}`
            }

            paths[lIndex].setAttribute('d', d)
        })
    }

    const tick = (time: number) => {
        const { current: mouse } = mouseRef

        mouse.sx += (mouse.x - mouse.sx) * 0.1
        mouse.sy += (mouse.y - mouse.sy) * 0.1

        const dx = mouse.x - mouse.lx
        const dy = mouse.y - mouse.ly
        const d = Math.hypot(dx, dy)

        mouse.v = d
        mouse.vs += (d - mouse.vs) * 0.1
        mouse.vs = Math.min(100, mouse.vs)

        mouse.lx = mouse.x
        mouse.ly = mouse.y

        mouse.a = Math.atan2(dy, dx)

        if (containerRef.current) {
            containerRef.current.style.setProperty('--x', `${mouse.sx}px`)
            containerRef.current.style.setProperty('--y', `${mouse.sy}px`)
        }

        movePoints(time)
        drawLines()

        rafRef.current = requestAnimationFrame(tick)
    }

    return (
        <div
            ref={containerRef}
            className={`waves-component ${className}`}
            style={{
                backgroundColor,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                '--x': '-0.5rem',
                '--y': '50%',
            } as React.CSSProperties}
        >
            <svg
                ref={svgRef}
                className="block w-full h-full js-svg"
                xmlns="http://www.w3.org/2000/svg"
            />
            <div
                className="pointer-dot"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${pointerSize}rem`,
                    height: `${pointerSize}rem`,
                    background: strokeColor,
                    borderRadius: '50%',
                    transform: 'translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)',
                    willChange: 'transform',
                    display: pointerSize > 0 ? 'block' : 'none',
                }}
            />
        </div>
    )
}