import Filter from './components/Filter';
import CardList from '@/ui/CardList';

export const metadata = {
  title: 'Products',
};

export default function Products() {
  return (
    <main className="min-h-screen bg-white">
      <Filter />
      <CardList />
    </main>
  );
}
