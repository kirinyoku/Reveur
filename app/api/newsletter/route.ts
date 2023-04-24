import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const email: string | undefined = await req.json();
  if (email) {
    try {
      const res = await prisma.email.create({
        data: {
          email,
        },
      });
      return NextResponse.json({ email: res.email });
    } catch {
      return NextResponse.json({ message: 'This email is already in use' });
    }
  }
}
