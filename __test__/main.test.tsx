import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/pages/index';

describe('Home', () => {
  it('should to match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
