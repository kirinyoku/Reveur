import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.error();
  }

  const res = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  return NextResponse.json(res);
}
