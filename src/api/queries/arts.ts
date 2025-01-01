import { Collections } from '../../types/pocketbase-types.ts';
import { pocketbase } from '../pocketbase.ts';

export const fetchArt = async () => {
  return await pocketbase.collection(Collections.ArtView).getFullList({
    sort: '-date',
  });
};
