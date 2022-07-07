import { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {todo: "", completed: false}

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo: </label>
            <input
                name="todo"
                id="todo"
                type="text"
                value={formData.todo}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;