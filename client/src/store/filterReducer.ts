import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  selectedSubCategories: [],
};

export const cartSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedSubCategories: (state, actions) => {
      if (actions.payload.isChecked) {
        state.selectedSubCategories.push(actions.payload.value);
      } else {
        state.selectedSubCategories = state.selectedSubCategories.filter(
          (item: string) => item !== actions.payload.value,
        );
      }
    },
  },
});

export const { setSelectedSubCategories } = cartSlice.actions;

export default cartSlice.reducer;
