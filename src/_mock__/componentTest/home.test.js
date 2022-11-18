import { render } from '@testing-library/react';
import Home from '../../components/home';

describe('Home', () => {
  test('should render homepage', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
