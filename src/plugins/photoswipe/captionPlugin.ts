import PhotoSwipeLightbox from 'photoswipe/lightbox';

export const registerCaptionPlugin = (lightbox: PhotoSwipeLightbox): void => {
  lightbox.on('uiRegister', function () {
    lightbox.pswp?.ui?.registerElement({
      name: 'custom-caption',
      order: 9,
      isButton: false,
      appendTo: 'root',
      html: 'Caption text',
      onInit: (el) => {
        el.style.background = 'rgba(0, 0, 0, 0.75)';
        el.style.fontSize = '16px';
        el.style.color = '#fff';
        el.style.width = 'calc(100% - 32px)';
        el.style.maxWidth = '400px';
        el.style.padding = '2px 8px';
        el.style.borderRadius = '4px';
        el.style.position = 'absolute';
        el.style.left = '50%';
        el.style.bottom = '16px';
        el.style.transform = 'translateX(-50%)';
        lightbox.pswp?.on('change', () => {
          const currSlideElement = lightbox.pswp?.currSlide?.data.element;
          let captionHTML: string | undefined | null = '';
          if (currSlideElement) {
            const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
            if (hiddenCaption) {
              captionHTML = hiddenCaption.innerHTML;
            } else {
              captionHTML = currSlideElement.querySelector('img')?.getAttribute('alt');
            }
          }
          el.innerHTML = captionHTML ?? '';
        });
      },
    });
  });
};
