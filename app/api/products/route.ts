import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

type Product = {
  id?: string;
  title: string;
  description: string;
  brand: string;
  imgURL: string;
  img2URL: string;
  currentPrice: string;
  oldPrice: string;
  isNew: boolean | string;
  type: 'NORMAL' | 'FEATURED' | 'TRENDING';
  subCategory: string;
  categories: string[];
};

export async function POST(request: Request) {
  try {
    let {
      title,
      description,
      brand,
      imgURL,
      img2URL,
      currentPrice,
      oldPrice,
      isNew,
      type,
      categories,
      subCategory,
    }: Product = await request.json();

    if (!oldPrice) {
      oldPrice = '0';
    }

    if (isNew === 'true') {
      isNew = true;
    } else {
      isNew = false;
    }

    console.log(categories);

    const res = await prisma.product.create({
      data: {
        title,
        description,
        brand,
        imgURL,
        img2URL,
        currentPrice: Number(currentPrice),
        oldPrice: Number(oldPrice),
        isNew: isNew,
        type,
        categories: {
          connect: categories.map((title) => ({ title })),
        },
        sub_categories: {
          connect: { title: subCategory },
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
    const res = await prisma.product.findMany({
      include: {
        categories: true,
        sub_categories: true,
      },
    });
    return NextResponse.json(res);
  } catch {
    return NextResponse.error();
  }
}
