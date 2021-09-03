import renderer from 'react-test-renderer';
import Banner from '../';

it('renders banner correctly', () => {
    const tree = renderer
        .create(<Banner />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
