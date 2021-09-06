import Post from '../';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import { IApplicationState } from '../../../store'

describe("[POST]", () => {

    const mockedApplicatoinState: IApplicationState = {
        users: {
            data: [
                {

                    id: 2,
                    name: 'edilson',

                },
            ]
        },
        comments: {
            data: [
                {
                    body: "I love this post",
                    id: 1,
                    postId: 2,
                    email: "myemail@gmail.com",
                    name: "Edilson"
                }
            ]
        },
        posts: {
            data: [
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
                {
                    userId: 1,
                    id: 3,
                    title: 'Marketing',
                    body: 'This is a evaluation of test',
                    user: {
                        id: 1,
                        name: 'edilson',
                    },
                },
            ],
            loading: false,

        }
    }

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockImplementation(callback => {
            return callback(mockedApplicatoinState);
        });
        const mockDispatchFn = jest.fn()
        useDispatchMock.mockReturnValue(mockDispatchFn);
    });

    afterEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    it('should render page with a post', () => {
        const { getByTestId, getAllByTestId, getByText, getAllByAltText } = render(
            <Post />
        );
        expect(getByTestId('inputText')).toBeInTheDocument();
        expect(getByText('IT Development is great')).toBeInTheDocument();
        expect(getByText('This is a body for develoment test')).toBeInTheDocument();
        expect(getByText('Marketing')).toBeInTheDocument();
        expect(getByText('This is a evaluation of test')).toBeInTheDocument();
        expect(getAllByAltText('comments').length).toBe(2);
        expect(getAllByAltText('retweet').length).toBe(2);
        expect(getAllByTestId("getCommentsButton").length).toBe(2);
    });

})
