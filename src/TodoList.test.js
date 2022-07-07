import { render, fireEvent } from '@testing-library/react';
import TodoList from "./TodoList"

function addTodo(todoList, todo="Water Plants") {
    const input = todoList.getByLabelText("New Todo:");
    fireEvent.change(input, { target: {value: todo}});
    const button = todoList.getByText("Add Todo");
    fireEvent.click(button);
}

// smoke test
test('renders without crashing', () => {
  render(<TodoList />);
});

// snapshop test
test ('matches snapshot', () => {
  const {asFragment} = render(<TodoList/>);
  expect(asFragment()).toMatchSnapshot();
})

// more tests
test ('can add a todo', () => {
    const todoList = render(<TodoList/>)

    // todo should not exist
    expect(todoList.queryByText("Water Plants")).not.toBeInTheDocument()

    // add Todo
    addTodo(todoList)

    // todo should exist
    expect(todoList.queryByText("Water Plants")).toBeInTheDocument()

    // form should reset
    expect(todoList.getAllByDisplayValue("")).toHaveLength(1)
})

test ('can delete a todo', () => {
    const todoList = render(<TodoList/>)
    addTodo(todoList)
    expect(todoList.queryByText("Water Plants")).toBeInTheDocument()

    // Delete todo
    const removeButton  = todoList.queryByText("X");
    fireEvent.click(removeButton);
    expect(todoList.queryByText("Water Plants")).not.toBeInTheDocument()

})