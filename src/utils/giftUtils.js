export const giftIds = ['1', '2', '3', '4'];

export const charHasGiftReady = (giftData) => {
  let haveGift = false;

  for (let i = 1; i <= 4; i++) {
    if (giftData[`have${i}`] && !giftData[`gifted${i}`]) {
      haveGift = true;
    }
  }

  return haveGift;
};
