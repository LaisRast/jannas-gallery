import { useQuery } from '@tanstack/react-query';
import { fetchArt } from '../api/queries/arts.ts';

export const useArt = () => {
  return useQuery({
    queryKey: ['art'],
    queryFn: () => fetchArt(),
  });
};
