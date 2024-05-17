import CHARACTERS from '../data/characters';

const defaultGiftsData = {};

CHARACTERS.forEach((name) => {
  defaultGiftsData[name] = {
    giftedToday: false,
    have: false,
    ready: false,
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
