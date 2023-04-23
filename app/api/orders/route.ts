import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const orders = await prisma.order.findMany();
    return NextResponse.json(orders);
  } catch {
    return NextResponse.error();
  }
}
