import { useQuery } from '@tanstack/react-query';
import { fetchGameByReadableId } from '../api/queries/games.ts';

export const useGameByReadableId = ({ readableId }: { readableId: string }) => {
  return useQuery({
    queryKey: ['game'],
    queryFn: () => fetchGameByReadableId({ readableId }),
  });
};
