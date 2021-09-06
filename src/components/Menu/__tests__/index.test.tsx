import { render } from '@testing-library/react';
import Menu from '../';

describe("[Menu Component]", () => {
    it("should render header with menu", () => {
        const { getByTestId } = render(<Menu />);

        expect(getByTestId("notifications")).toBeInTheDocument();
        expect(getByTestId("home")).toBeInTheDocument();
        expect(getByTestId("messages")).toBeInTheDocument();
    })
})
