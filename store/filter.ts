import { create } from 'zustand';

type FilterState = {
  search: string;
  selectedCategory: string;
  selectedSubCategory: string;
  setSearch: (input: string) => void;
  setCategory: (category: string) => void;
  setSubCategory: (subCategory: string) => void;
};

const useFilterStore = create<FilterState>((set) => ({
  search: '',
  selectedCategory: 'woman',
  selectedSubCategory: '',
  setSearch: (input) => set((state) => ({ search: input.toLowerCase() })),
  setCategory: (category) => set((state) => ({ selectedCategory: category.toLowerCase() })),
  setSubCategory: (subCategory) =>
    set((state) => ({ selectedSubCategory: subCategory.toLowerCase() })),
}));

export default useFilterStore;
