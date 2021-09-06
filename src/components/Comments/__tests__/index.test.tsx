import { render } from '@testing-library/react';
import Comments from '../';

describe("[Comments Component]", () => {
    it("should render comments with email, name and body", () => {
        const { getByText } = render(<Comments
            name="Edilson"
            body="This is a comment body"
            email="myemail@gmail.com" />
        );

        expect(getByText("Edilson")).toBeInTheDocument();
        expect(getByText("This is a comment body")).toBeInTheDocument();
        expect(getByText("myemail@gmail.com")).toBeInTheDocument();
    })
})
