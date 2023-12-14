// src/store/index.ts
import { createStore, combineReducers } from 'redux';
import selectedProductReducer from './reducers/selectedProductReducer'; // Import your reducer
import { Product } from '../types'; // Import your types/interfaces as needed

// Define the root state type
export interface RootState {
  selectedProduct: Product | null;
  // Add other state properties here if needed
}

// Combine reducers
const rootReducer = combineReducers<RootState>({
  selectedProduct: selectedProductReducer,
  // Add other reducers here if needed
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;