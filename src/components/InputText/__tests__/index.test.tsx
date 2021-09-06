import { render, fireEvent } from '@testing-library/react';
import Input from '../'

describe('[INPUT', () => {
    const changeAction = jest.fn();
    const input = <Input
        placeholder="Type something here"
        onChange={changeAction}
        type="text"
        value=""
    />;

    const findByPlaceHolder = (component: JSX.Element, placeholderText: string) => {
        const { getByPlaceholderText } = render(component);
        return getByPlaceholderText(placeholderText)

    }
    it("should have Type something here as placeholder", () => {
        expect(findByPlaceHolder(input, "Type something here")).toBeInTheDocument();
    });

    it('should fire input event change', () => {
        const myInput = findByPlaceHolder(input, "Type something here")
        fireEvent.change(myInput, { target: { value: "New Post" } });
        expect(changeAction).toHaveBeenCalled();
    });

})

