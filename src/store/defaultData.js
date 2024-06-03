import CHARACTERS from '../data/characters';

const defaultGiftsData = {};

CHARACTERS.forEach((name) => {
  defaultGiftsData[name] = {
    giftedToday: false,
    ready: false,
    have1: false,
    have2: false,
    have3: false,
    have4: false,
    gifted1: false,
    gifted2: false,
    gifted3: false,
    gifted4: false,
    gift1: '',
    gift2: '',
    gift3: '',
    gift4: '',
  };
});

export default defaultGiftsData;
