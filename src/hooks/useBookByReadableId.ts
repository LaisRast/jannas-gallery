import { useQuery } from '@tanstack/react-query';
import { fetchBookByReadableId } from '../api/queries/books.ts';

export const useBookByReadableId = ({ readableId }: { readableId: string }) => {
  return useQuery({
    queryKey: ['book'],
    queryFn: () => fetchBookByReadableId({ readableId }),
  });
};
