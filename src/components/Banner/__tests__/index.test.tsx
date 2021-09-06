import renderer from 'react-test-renderer';
import Banner from '../';

describe("[Banner Component]", () => {
    it('renders banner correctly', () => {
        const tree = renderer
            .create(<Banner />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})
