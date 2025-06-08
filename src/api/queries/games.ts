import { Collections } from '../../types/pocketbase-types.ts';
import { pocketbase } from '../pocketbase.ts';

export const fetchGames = async () => {
  return await pocketbase.collection(Collections.Games).getFullList();
};

export const fetchGameByReadableId = async ({ readableId }: { readableId: string }) => {
  return await pocketbase.collection(Collections.Games).getFirstListItem(`readable_id = '${readableId}'`);
};
