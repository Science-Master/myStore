// src/store/reducers/selectedProductReducer.ts
import { ActionTypes, SET_PRODUCT, CLEAR_PRODUCT } from '../actions';
import { Product } from '../../types';

const initialState: Product | null = null;

const selectedProductReducer = (state = initialState, action: ActionTypes): Product | null => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.payload;
    case CLEAR_PRODUCT:
      return null;
    default:
      return state;
  }
};

export default selectedProductReducer;
