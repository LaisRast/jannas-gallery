import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { likeArt, unlikeArt } from '../../api/queries/likes.ts';

export function registerLikePlugin(lightbox: PhotoSwipeLightbox) {
  lightbox.on('uiRegister', function () {
    lightbox.pswp?.ui?.registerElement({
      name: 'like-button',
      order: 9,
      isButton: true,
      onClick: (_event, el, pswp) => {
        const data = pswp.currSlide?.data.element?.dataset;
        if (!data) {
          return;
        }
        const artId = data.pswpId;
        const numberOfLikes = data.pswpNumberOfLikes;
        if (artId === undefined || numberOfLikes === undefined) {
          return;
        }
        const likeId = data.pswpLikeId;
        if (likeId) {
          unlikeArt({ likeId }).then(() => {
            delete data.pswpLikeId;
            data.pswpNumberOfLikes = (parseInt(numberOfLikes) - 1).toString();
            el.innerHTML = constuctLikeButton(false, parseInt(numberOfLikes) - 1);
          });
        } else {
          likeArt({ artId }).then((likeId) => {
            data.pswpLikeId = likeId;
            data.pswpNumberOfLikes = (parseInt(numberOfLikes) + 1).toString();
            el.innerHTML = constuctLikeButton(true, parseInt(numberOfLikes) + 1);
          });
        }
      },
      onInit: (el, pswp) => {
        pswp.on('change', async () => {
          const data = pswp.currSlide?.data.element?.dataset;
          if (!data) {
            return;
          }
          const artId = data.pswpId;
          const numberOfLikes = data.pswpNumberOfLikes;
          if (artId === undefined || numberOfLikes === undefined) {
            return;
          }
          const likeId = data.pswpLikeId;
          if (likeId) {
            el.innerHTML = constuctLikeButton(true, parseInt(numberOfLikes));
          } else {
            el.innerHTML = constuctLikeButton(false, parseInt(numberOfLikes));
          }
        });
      },
    });
  });
}

const constuctLikeButton = (isLike: boolean, numberOfLikes: number) => {
  return HeartLineIcon.replace('currentColor', isLike ? 'red' : 'white').replace(
    'numberOfLikes',
    numberOfLikes.toString()
  );
};

const HeartLineIcon = `<div style="margin-top:16px">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" style="margin-top: 4px">
                       <path fill="currentColor" stroke="black" stroke-width="1" d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z">
                       </path>
                       </svg>
                       <span style="display:block;color:white">numberOfLikes</span>
                       </div>
                       `;
