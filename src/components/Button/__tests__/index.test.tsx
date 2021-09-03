import { render } from '@testing-library/react'
import renderer from 'react-test-renderer';
import Button from '../'

describe('[BUTTON', () => {
    const buttonAction = jest.fn();
    const button = <Button
        onClick={buttonAction}
        disabled={false}>CLICK HERE</Button>;

    it('renders button correctly', () => {
        const tree = renderer
            .create(<Button disabled={false} onClick={() => { }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should render with CLICK HERE text", () => {
        const { getByText } = render(button);

        expect(getByText("CLICK HERE")).toBeInTheDocument()
    });

    it('should execute button event click', () => {
        const { getByText } = render(button);

        const component = getByText("CLICK HERE");
        component.click()

        expect(buttonAction).toHaveBeenCalled();


    })

})

