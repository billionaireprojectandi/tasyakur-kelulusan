import { create } from "zustand";

interface MenuState {
  activeMenu: number;
  changeMenu: (menu: number) => void;
}

const useMenuStore = create<MenuState>()((set) => ({
  activeMenu: 0,
  changeMenu: (menu) => set({ activeMenu: menu }),
}));

export default useMenuStore;
