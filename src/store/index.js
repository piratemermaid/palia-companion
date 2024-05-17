import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import defaultGiftsData from './defaultData';

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
    }),
    {
      name: 'persistedState',
    }
  )
);
