import { render } from '@testing-library/react';
import Header from '../';

describe("[Header Component]", () => {
    it("should render header with menu", () => {
        const { getByTestId } = render(<Header />);

        expect(getByTestId("tweet")).toBeInTheDocument();
        expect(getByTestId("avatar")).toBeInTheDocument();
        expect(getByTestId("search")).toBeInTheDocument();
    })
})
