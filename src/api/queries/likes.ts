import { Collections, LikesRecord } from '../../types/pocketbase-types.ts';
import { getVisitorId } from '../../utils/visitorUtils.ts';
import { pocketbase } from '../pocketbase.ts';

export const likeArt = async ({ artId }: { artId: string }) => {
  const visitorId = getVisitorId();
  return await pocketbase
    .collection(Collections.Likes)
    .create<LikesRecord>({ art_id: artId, visitor_id: visitorId })
    .then(({ id }) => id);
};

export const unlikeArt = async ({ likeId }: { likeId: string }) => {
  return await pocketbase.collection(Collections.Likes).delete(likeId);
};

export const fetchLikes = async () => {
  return await pocketbase.collection(Collections.Likes).getFullList();
};
