import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import {v4 as uuid} from "uuid";


const TodoList = () => {
    const [todos, setTodos] = useState([])

    console.log(todos)
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }

    const deleteTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id).map(todo => todo))
    }

    return (
        <div>
            <h1>Add a Todo:</h1>
            <NewTodoForm addTodo={addTodo}/>
            <h1>My Todos</h1>
            {todos.map(({id, todo, completed}) => <Todo 
                id={id}
                todo={todo} 
                completed={completed} 
                key={id}
                deleteTodo={deleteTodo}/>)}
        </div>
        
    )
}

export default TodoList;