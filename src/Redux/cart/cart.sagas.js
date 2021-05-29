import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user_types';
import { clearCart } from './cart_actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}