import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '../api/queries/games.ts';

export const useGames = () => {
  return useQuery({
    queryKey: ['games'],
    queryFn: () => fetchGames(),
  });
};
