import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/CategorySlice";
import cartReducer from "./slices/CartSlice";
import searchSlice from "./slices/SearchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,  // ✅ category key
    search : searchSlice,
  },
});

export default store;
