import Swiper from 'swiper';
import { Navigation, FreeMode, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

document.addEventListener('DOMContentLoaded', function () {
  const thumbs_swiper = new Swiper('.thumbs', {
    modules: [FreeMode],
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const main_swiper = new Swiper('.main', {
    modules: [Navigation, Thumbs, Autoplay],
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbs_swiper,
    },
    loop: true,
    autoHeight: false,
    loadPrevNext: false,
    // amount of images to load
    loadPrevNextAmount: 1,
    autoplay: { delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: false },
  });
});
