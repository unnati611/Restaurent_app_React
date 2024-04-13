import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    nameInput: {
      value: "",
      isError: false,
    },
    contactInput: {
      value: "",
      isError: false,
    },
    addressInput: {
      value: "",
      isError: false,
    },
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.items[state.items.length - 1] = {
        ...state.items[state.items.length - 1],
        qty: 1,
      };
    },
    removeItem: (state, index) => {
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    increseItemQty: (state, action) => {
      // const newObj = new Object(state.items[action.payload]);
      const newObj = { ...state.items[action.payload] };
      newObj.qty += 1;
      state.items[action.payload] = newObj;
    },
    decreseItemQty: (state, action) => {
      // const newObj = new Object(state.items[action.payload]);
      if (state.items[action.payload].qty === 1) {
        state.items.splice(action.payload, 1);
      } else {
        const newObj = { ...state.items[action.payload] };
        newObj.qty -= 1;
        state.items[action.payload] = newObj;
      }
    },
    updateNameinput: (state, action) => {
      state.nameInput.value = action.payload;
    },
    updateContactinput: (state, action) => {
      state.contactInput.value = action.payload;
    },
    updateAddressinput: (state, action) => {
      state.addressInput.value = action.payload;
    },
    errorNameinput: (state, action) => {
      state.nameInput.isError = action.payload;
    },
    errorContactinput: (state, action) => {
      state.contactInput.isError = action.payload;
    },
    errorAddressinput: (state, action) => {
      state.addressInput.isError = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increseItemQty,
  decreseItemQty,
  updateNameinput,
  updateContactinput,
  updateAddressinput,
  errorNameinput,
  errorContactinput,
  errorAddressinput,
} = cartSlice.actions;
export default cartSlice.reducer;
