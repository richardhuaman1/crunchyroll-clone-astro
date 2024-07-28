import Swiper from 'swiper';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

document.addEventListener('DOMContentLoaded', function () {
  const breakpoints = {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
      allowTouchMove: true,
      slidesPerGroup: 2,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
      allowTouchMove: true,
      freeMode: true,
      slidesPerGroup: 2,
    },
    573: {
      slidesPerView: 3,
      spaceBetween: 15,
      allowTouchMove: true,
      freeMode: true,
      slidesPerGroup: 3,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 15,
      slidesPerGroup: 4,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 15,
      slidesPerGroup: 4,
    },
    1023: {
      slidesPerView: 6,
      spaceBetween: 15,
      slidesPerGroup: 6,
    },
    1279: {
      slidesPerView: 6,
      spaceBetween: 20,
      slidesPerGroup: 6,
    },
  };

  const multi_main_swiper = new Swiper('.multi-main', {
    modules: [Navigation, Thumbs, FreeMode],
    slidesPerView: 'auto',
    breakpoints,
    autoplay: { delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: false },
  });
});
