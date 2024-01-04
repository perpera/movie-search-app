import { Notify } from 'notiflix';

export const notification = message => {
  Notify.init({
    backOverlay: true,
    info: {
      background: '#8BD538',
    },
  });
  return Notify.info(message);
};
