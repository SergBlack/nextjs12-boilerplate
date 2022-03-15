import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('should to match snapshot', () => {
    const { container } = render(<HomePage />);

    expect(container).toMatchSnapshot();
  });
});
