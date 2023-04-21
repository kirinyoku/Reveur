import fetcher from './fecther';
import { useQuery } from '@tanstack/react-query';

export default function GetProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => fetcher('products'),
    staleTime: Infinity,
  });
}
