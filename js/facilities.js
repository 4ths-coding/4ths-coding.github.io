document.addEventListener('DOMContentLoaded', () => {
      const slide = document.querySelector('.slide');
      const root = document.querySelector(':root');
      let slideIndex = 0;
      let isMoving = false;

      function processImages(item) {
        return `<img src="${item.url}" alt="${item.alt}">`;
      }

      function moveSlides() {
        const slidesArray = [...slide.querySelectorAll('img')];
        const padding = 10;
        const slideWidth = slide.clientWidth + padding; // Adjusting for padding
        slide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        root.style.setProperty('--slide-progress', `${(100 / (slidesArray.length - 3)) * (slideIndex - 1)}%`);

        slidesArray.forEach((img, index) => {
        if (index === slideIndex) {
            img.style.filter = 'drop-shadow(0px 0px 6px white)'; // Remove blur from the active image
        } else {
            img.style.filter = 'blur(8px)'; // Add blur to non-active images
        }
    });
      }

      function moveHandler(direction) {
        isMoving = true;
        slide.style.transition = `transform 450ms ease-in-out`;
        direction !== 'right' ? (slideIndex -= 1) : (slideIndex += 1);
        moveSlides();
      }

      async function fetchImages() {
        try {
          const response = await fetch('../js/images.json');
          if (!response.ok) {
            throw new Error('Network response was not okay');
          }
          const data = await response.json();
          data.push(data[0]);
          data.unshift(data[data.length - 2]);
          slide.innerHTML = data.map(processImages).join('');
          moveSlides();
          setTimeout(() => {
      moveHandler('right');
      console.log('MOVE RIGHT');
    }, 100);
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        }
      }

      fetchImages();

      window.addEventListener('keyup', e => {
        if (isMoving) {
          return;
        }
        switch (e.key) {
          case 'ArrowLeft':
            moveHandler();
            break;
          case 'ArrowRight':
            moveHandler('right');
            break;
          default:
            break;
        }
      });

      document.querySelector('.slider__btn--right').addEventListener('click', () => {
        if (isMoving) {
          return;
        }
        moveHandler('right');
      });

      document.querySelector('.slider__btn--left').addEventListener('click', () => {
        if (isMoving) {
          return;
        }
        moveHandler();
      });

      slide.addEventListener('transitionend', () => {
        isMoving = false;
        const slidesArray = [...slide.querySelectorAll('img')];
        root.style.setProperty('--slide-progress--transition', `${slideIndex === slidesArray.length - 1 ? 'none' : 'all 400ms cubic-bezier(0.82, 0.02, 0.39, 1.01)'}`);
        if (slideIndex === 0) {
          slide.style.transition = 'none';
          slideIndex = slidesArray.length - 2;
          moveSlides();
        }
        if (slideIndex === slidesArray.length - 1) {
          slide.style.transition = 'none';
          slideIndex = 1;
          moveSlides();
        }
      });

    });
