import { call, put } from '@redux-saga/core/effects';
import api from '../../../services/api';
import { IUser } from './types';
import { loadSuccess } from './actions';

export function* loadUsers() {
  const response: IUser[] = yield call(api.get, 'users');
  yield put(loadSuccess(response));
}
