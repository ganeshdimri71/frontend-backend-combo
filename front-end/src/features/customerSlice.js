import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerInformation: [],
  subscriberInformation: [],
};

const customerSlice = createSlice({
  name: "customerAndSubscriber",
  initialState,
  reducers: {
    setCustomerDataInRedux: (state, action) => {
      state.customerInformation = action.payload;
    },
    setSubscriberDataInRedux: (state, action) => {
      state.subscriberInformation = action.payload;
    },
  }
});

export const { setCustomerDataInRedux,setSubscriberDataInRedux } = customerSlice.actions;

export default customerSlice.reducer;
