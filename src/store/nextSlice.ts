import { StoreProduct } from "@/type";
import { Store, createSlice } from "@reduxjs/toolkit";

interface NextState {
  productData: StoreProduct[];
  favouriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favouriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.productData?.find(
        (item: StoreProduct) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavourite: (state, action) => {
      const existingProduct = state?.favouriteData?.find(
        (item: StoreProduct) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favouriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state?.productData?.find(
        (item: StoreProduct) => item.id === action.payload.id
      );
      existingProduct && existingProduct.quantity++;
    },
    descreaseQuantity: (state, action) => {
      const existingProductIndex = state.productData.findIndex(
        (item: StoreProduct) => item.id === action.payload.id
      );
      const existingProduct = state.productData[existingProductIndex];
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.productData.splice(existingProductIndex, 1);
        } else {
          existingProduct.quantity--;
        }
      }
    },

    deleteProduct: (state, action) => {
      state.productData = state.productData?.filter((item: StoreProduct) => {
        return item.id !== action.payload?.id;
      });
    },
    resetCart: (state, action) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state, action) => {
      state.userInfo = null;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavourite,
  descreaseQuantity,
  increaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  removeUser,
  setAllProducts,
} = nextSlice.actions;

export default nextSlice.reducer;
