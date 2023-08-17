import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    data: [],
  },
  reducers: {
    setTestimonials: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;

export const selectTestimonials = (state) => state.testimonials.data;

export default testimonialsSlice.reducer;
