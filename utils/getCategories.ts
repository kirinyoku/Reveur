import fetcher from './fecther';
import { useQuery } from '@tanstack/react-query';

export default function GetCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => fetcher('categories'),
    staleTime: Infinity,
  });
}
