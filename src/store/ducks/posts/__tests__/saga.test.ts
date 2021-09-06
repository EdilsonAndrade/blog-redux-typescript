import { call, put, take } from 'redux-saga/effects';
import { loadPosts } from '../sagas';
import { loadSuccess } from '../actions';
import api from '../../../../services/api';
import { IPost } from '../types';

describe('[Load Posts Saga', () => {
  const getPostsFromApi = call(api.get, 'posts');

  const mockedPosts = [
    {
      userId: 1,
      id: 2,
      title: 'IT Development is great',
      body: 'This is a body for develoment test',
      user: {
        id: 1,
        name: 'edilson',
      },
    },
  ];

  it('success triggers success action with posts', () => {
    const generator = loadPosts();
    const response = mockedPosts;

    expect(generator.next().value).toEqual(getPostsFromApi);
    expect(generator.next(response).value).toEqual(
      put(loadSuccess(mockedPosts)),
    );
    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});
