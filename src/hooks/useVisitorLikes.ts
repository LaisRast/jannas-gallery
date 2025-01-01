import { useQuery } from '@tanstack/react-query';
import { fetchLikes } from '../api/queries/likes.ts';

export const useVisitorLikes = () => {
  return useQuery({
    queryKey: ['likes'],
    queryFn: () => fetchLikes(),
  });
};
