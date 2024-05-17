import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import defaultGiftsData from './defaultData';
import CHARACTERS from '../data/characters';

export const useStore = create(
  persist(
    (set, get) => ({
      gifts: defaultGiftsData,
      updateGifts: (name, property, newValue) => {
        const gifts = get().gifts;
        return set({
          gifts: {
            ...gifts,
            [name]: {
              ...gifts[name],
              [property]: newValue,
            },
          },
        });
      },
      setGifts: (newGifts) => {
        return set({ gifts: newGifts });
      },
      resetGiftedToday: () => {
        const newGifts = get().gifts;
        CHARACTERS.forEach((name) => {
          newGifts[name].giftedToday = false;
        });
        return set({ gifts: newGifts });
      },
    }),
    {
      name: 'persistedState',
    }
  )
);
