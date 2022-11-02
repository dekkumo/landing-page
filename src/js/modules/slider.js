import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper-container', {
  modules: [ Navigation, Pagination ],
  loop: true,
  navigation: {
    nextEl: '_icon-arrow-left-long',
    prevEl: '_icon-arrow-right-long',
  },
  speed: 1000,
  spaceBetween: 30,
});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev()
})

swiperNext.addEventListener('click', () => {
  swiper.slideNext()
})