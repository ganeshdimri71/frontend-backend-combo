import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerInformation: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerDataInRedux: (state, action) => {
      state.customerInformation = action.payload;
    },
  },
});

export const { setCustomerDataInRedux } = customerSlice.actions;

export default customerSlice.reducer;
