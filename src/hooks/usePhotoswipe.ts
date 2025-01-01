import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react';
import { registerCaptionPlugin } from '../plugins/photoswipe/captionPlugin.ts';
import { registerLikePlugin } from '../plugins/photoswipe/likePlugin.ts';
import { ArtViewResponse } from '../types/pocketbase-types.ts';

export const usePhotoswipe = ({ arts }: { arts: ArtViewResponse[] | undefined }) => {
  useEffect(() => {
    if (!arts) {
      return;
    }
    const lightbox: PhotoSwipeLightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    registerLikePlugin(lightbox);
    registerCaptionPlugin(lightbox);
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [arts]);
};
