import { useQuery } from '@tanstack/react-query';
import { fetchBooks } from '../api/queries/books.ts';

export const useBooks = () => {
  return useQuery({
    queryKey: ['books'],
    queryFn: () => fetchBooks(),
  });
};
