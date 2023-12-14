// src/store/actions.ts
import { Product } from '../types';

export const SET_PRODUCT = 'SET_PRODUCT';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';

interface SetProductAction {
  type: typeof SET_PRODUCT;
  payload: Product;
}

interface ClearProductAction {
  type: typeof CLEAR_PRODUCT;
}

export const setProduct = (product: Product): SetProductAction => ({
  type: SET_PRODUCT,
  payload: product
});

export const clearProduct = (): ClearProductAction => ({
  type: CLEAR_PRODUCT
});

export type ActionTypes = SetProductAction | ClearProductAction;
