import { combineReducers } from '@reduxjs/toolkit';
import productList from './productList.reducer';

const reducers = combineReducers({ productList: productList })

export default reducers;