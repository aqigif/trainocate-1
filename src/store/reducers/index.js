import { combineReducers } from '@reduxjs/toolkit';
import productList from './products/productList.reducer';

const reducers = combineReducers({ productList: productList })

export default reducers;