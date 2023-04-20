import Info from './components/Info';
import Preview from './components/Preview';

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function Product({ params }: ProductProps) {
  const res = await fetch(`https://reveur.vercel.app/api/product?id=${params.id}`);
  const product: Product = await res.json();

  return (
    <main className="mb-12 py-2 px-4 md:px-8 flex flex-col md:flex-row gap-8 mt-20 md:mt-40">
      <Preview product={product} />
      <Info product={product} />
    </main>
  );
}

export async function generateStaticParams() {
  const data = await fetch('https://reveur.vercel.app/api/products');
  const products: Product[] = await data.json();

  return products.map((product) => ({ id: product.id }));
} 
