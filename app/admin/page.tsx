import Link from 'next/link';
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';
import SubCategoryForm from './components/SubCategoryForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Orders from './components/Orders';

export default async function Admin() {
  const session = await getServerSession(authOptions);
  const userRole = session?.user.role;

  if (userRole === 'ADMIN') {
    return (
      <section className="relative bg-white z-50">
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center pt-2">Admin Panel</h1>
          <a
            className="text-2xl font-medium my-2 block underline-offset-1 hover:underline"
            href="/">
            ← Back to Home
          </a>
          <CategoryForm />
          <SubCategoryForm />
          <ProductForm />
          <Orders />
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex justify-center items-center h-screen w-full">
        <h1 className="text-4xl">You need to be admin</h1>
      </section>
    );
  }
}
