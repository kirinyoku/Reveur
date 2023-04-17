import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

type RequestData = {
  title: string;
  categoriesTitle: string[];
};

export async function POST(request: Request) {
  try {
    const { title, categoriesTitle }: RequestData = await request.json();

    if (!title && categoriesTitle.length === 0) {
      return NextResponse.error();
    }

    const res = await prisma.subCategory.create({
      data: {
        title,
        categories: {
          connect: categoriesTitle.map((title) => ({ title })),
        },
      },
    });

    return NextResponse.json(res);
  } catch {
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const res = await prisma.subCategory.findMany({
      include: {
        categories: true,
        products: true,
      },
    });
    return NextResponse.json(res);
  } catch {
    return NextResponse.error();
  }
}
