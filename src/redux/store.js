import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import searchSlice from './features/search-slice';
import productSlice from './features/product-slice';
import cartSlice from './features/cart-slice';
import  wishlistSlice from './features/wishlist-slice';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();


const persistConfig = {
  key:'root',
  storage,
  version:1,
  blacklist:['search','products']
}


const rootReducer = combineReducers({
  search:searchSlice,
  products:productSlice,
  cart:cartSlice,
  wishlist:wishlistSlice,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  }),
})