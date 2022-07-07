import { render } from '@testing-library/react';
import Todo from './Todo';

// smoke test
test('renders without crashing', () => {
  render(<Todo />);
});

// snapshop test
test ('matches snapshot', () => {
  const {asFragment} = render(<Todo/>);
  expect(asFragment()).toMatchSnapshot();
})
