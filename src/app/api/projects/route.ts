import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { projects } from '@/db/schema';
import { eq, like, or, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single project by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const project = await db
        .select()
        .from(projects)
        .where(eq(projects.id, parseInt(id)))
        .limit(1);

      if (project.length === 0) {
        return NextResponse.json(
          { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(project[0], { status: 200 });
    }

    // List projects with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');

    let query = db.select().from(projects);

    if (search) {
      query = query.where(
        or(
          like(projects.title, `%${search}%`),
          like(projects.description, `%${search}%`),
          like(projects.category, `%${search}%`)
        )
      );
    }

    const results = await query
      .orderBy(asc(projects.orderIndex))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, url, imageUrl, category, orderIndex } = body;

    // Validate required fields
    const trimmedTitle = title?.trim();
    const trimmedDescription = description?.trim();
    const trimmedUrl = url?.trim();

    if (!trimmedTitle) {
      return NextResponse.json(
        { error: 'Title is required and cannot be empty', code: 'MISSING_TITLE' },
        { status: 400 }
      );
    }

    if (!trimmedDescription) {
      return NextResponse.json(
        { error: 'Description is required and cannot be empty', code: 'MISSING_DESCRIPTION' },
        { status: 400 }
      );
    }

    if (!trimmedUrl) {
      return NextResponse.json(
        { error: 'URL is required and cannot be empty', code: 'MISSING_URL' },
        { status: 400 }
      );
    }

    // Prepare insert data
    const now = new Date().toISOString();
    const insertData = {
      title: trimmedTitle,
      description: trimmedDescription,
      url: trimmedUrl,
      imageUrl: imageUrl?.trim() || null,
      category: category?.trim() || null,
      orderIndex: orderIndex ?? 0,
      createdAt: now,
      updatedAt: now,
    };

    const newProject = await db
      .insert(projects)
      .values(insertData)
      .returning();

    return NextResponse.json(newProject[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if project exists
    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(id)))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { title, description, url, imageUrl, category, orderIndex } = body;

    // Prepare update data (only include provided fields)
    const updateData: any = {
      updatedAt: new Date().toISOString(),
    };

    if (title !== undefined) {
      updateData.title = title.trim();
    }

    if (description !== undefined) {
      updateData.description = description.trim();
    }

    if (url !== undefined) {
      updateData.url = url.trim();
    }

    if (imageUrl !== undefined) {
      updateData.imageUrl = imageUrl ? imageUrl.trim() : null;
    }

    if (category !== undefined) {
      updateData.category = category ? category.trim() : null;
    }

    if (orderIndex !== undefined) {
      updateData.orderIndex = orderIndex;
    }

    const updatedProject = await db
      .update(projects)
      .set(updateData)
      .where(eq(projects.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedProject[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if project exists
    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(id)))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deletedProject = await db
      .delete(projects)
      .where(eq(projects.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Project deleted successfully',
        project: deletedProject[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}