import { call, put, take } from 'redux-saga/effects';
import { loadUsers } from '../sagas';
import { loadSuccess } from '../actions';
import api from '../../../../services/api';

describe('[Load Users Saga', () => {
  const getUsersFromApi = call(api.get, 'users');

  const mockedUsers = [
    {
      id: 2,
      name: 'edilson',
    },
  ];

  it('success triggers success action with uses', () => {
    const generator = loadUsers();
    const response = mockedUsers;

    expect(generator.next().value).toEqual(getUsersFromApi);
    expect(generator.next(response).value).toEqual(
      put(loadSuccess(mockedUsers)),
    );
    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
