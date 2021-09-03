import { render } from '@testing-library/react';
import Header from '../';

describe("[Header]", () => {
    it("should render header with menu", () => {
        const { getByText } = render(<Header />)

        expect(getByText("Tweet")).toBeInTheDocument();
        expect(getByText("Notifications")).toBeInTheDocument();
        expect(getByText("Home")).toBeInTheDocument();
        expect(getByText("Messages")).toBeInTheDocument();

    })
})
