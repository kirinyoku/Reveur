import 'next-auth/jwt';
import type { User } from 'next-auth';
import { UserRole } from '@prisma/client';

type UserID = string;

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserID;
    role: UserRole;
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserID;
      role: UserRole;
    };
  }
}
