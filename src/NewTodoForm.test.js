import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// smoke test
test('renders without crashing', () => {
  render(<NewTodoForm />);
});

// snapshop test
test ('matches snapshot', () => {
  const {asFragment} = render(<NewTodoForm/>);
  expect(asFragment()).toMatchSnapshot();
})
