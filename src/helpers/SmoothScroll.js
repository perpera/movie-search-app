import { scroller } from 'react-scroll';

export const smoothScroll = target => {
  scroller.scrollTo(target, {
    duration: 1000,
    delay: 0,
    smooth: true,
    offset: -50,
  });
};
