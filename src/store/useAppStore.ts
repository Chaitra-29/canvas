import { create } from 'zustand';
import type { CanvasItem } from '../data/mockItems';
import { MOCK_ITEMS } from '../data/mockItems';

interface AppState {
  items: CanvasItem[];
  selectedItem: CanvasItem | null;
  setSelectedItem: (item: CanvasItem) => void;
}

export const useAppStore = create<AppState>((set) => ({
  items: MOCK_ITEMS,
  selectedItem: MOCK_ITEMS[0],
  number: 0,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));
