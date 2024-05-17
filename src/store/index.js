import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      something: false,
      toggleSomething: () => {
        const something = get().something;
        return set({ something: !something });
      },
    }),
    {
      name: 'persistedState',
    }
  )
);
