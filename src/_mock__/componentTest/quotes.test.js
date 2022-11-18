import { render } from '@testing-library/react';
import Quotes from '../../components/quotes';

describe('Quote', () => {
  test('should render quotes', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });
});
