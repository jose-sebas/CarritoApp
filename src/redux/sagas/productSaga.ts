import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchProductsSuccess, fetchProductsFailure, fetchProductsRequest } from '../reducers/productSlice';

function* fetchProducts() {
  try {
    const response = yield call(axios.get, 'https://fakestoreapi.com/products');
    yield put(fetchProductsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProductsRequest.type, fetchProducts);
}
