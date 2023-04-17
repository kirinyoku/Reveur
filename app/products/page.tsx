import Filter from './components/Filter';
import CardList from '@/ui/CardList';

export default function Products() {
  return (
    <main className="min-h-screen bg-white">
      <Filter />
      <CardList />
    </main>
  );
}
