import { combineReducers } from '@reduxjs/toolkit';
import productList from './productList.reducer';

const reducers = combineReducers({ productList })

export default reducers;