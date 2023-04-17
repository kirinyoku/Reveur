import Login from './Login';
import ProfileMenu from './ProfileMenu';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function UserAuth() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {!session?.user && <Login />}
      {session?.user && <ProfileMenu user={session.user} />}
    </>
  );
}
