import CHARACTERS from '../data/characters';

const defaultGiftsData = {};

CHARACTERS.forEach((name) => {
  defaultGiftsData[name] = {
    giftedToday: false,
    have: false,
    ready: false,
    gift1: false,
    gift2: false,
    gift3: false,
    gift4: false,
  };
});

export default defaultGiftsData;
