import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import defaultGiftsData from './defaultData';

export const useStore = create(
  persist(
    (set, get) => ({
      gifts: defaultGiftsData,
      // toggleSomething: () => {
      //   const something = get().something;
      //   return set({ something: !something });
      // },
    }),
    {
      name: 'persistedState',
    }
  )
);
