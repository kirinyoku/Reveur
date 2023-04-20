import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title }: { title: string } = await request.json();
    if (title.length < 2) {
      return NextResponse.error();
    }

    const res = await prisma.category.create({
      data: {
        title,
      },
    });
    return NextResponse.json(res);
  } catch {
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const res = await prisma.category.findMany({
      include: {
        sub_categories: true,
      },
    });
    return NextResponse.json(res);
  } catch {
    return NextResponse.error();
  }
}
