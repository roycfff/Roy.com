import { db } from '@/db';
import { projects } from '@/db/schema';

async function main() {
    const sampleProjects = [
        {
            title: 'Algorithmic Trading Bot',
            description: 'Developed a Python-based algorithmic trading system using machine learning to predict market trends. Implemented risk management protocols and achieved 15% average monthly returns in backtesting.',
            url: 'https://github.com/username/trading-bot',
            imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
            category: 'Trading',
            orderIndex: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce web application built with Next.js, TypeScript, and Stripe integration. Features include real-time inventory management, secure payment processing, and responsive design.',
            url: 'https://github.com/username/ecommerce-platform',
            imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
            category: 'Web Development',
            orderIndex: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            title: 'Workflow Automation Suite',
            description: 'Created a comprehensive automation toolkit using Python and Node.js that streamlines data processing, report generation, and email notifications. Reduced manual work by 80% for repetitive tasks.',
            url: 'https://github.com/username/automation-suite',
            imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800',
            category: 'Automation',
            orderIndex: 2,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ];

    await db.insert(projects).values(sampleProjects);
    
    console.log('✅ Projects seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});