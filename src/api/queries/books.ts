import { Collections } from '../../types/pocketbase-types.ts';
import { pocketbase } from '../pocketbase.ts';

export const fetchBooks = async () => {
  return await pocketbase.collection(Collections.Books).getFullList();
};

export const fetchBookByReadableId = async ({ readableId }: { readableId: string }) => {
  return await pocketbase.collection(Collections.Books).getFirstListItem(`readable_id = '${readableId}'`);
};
