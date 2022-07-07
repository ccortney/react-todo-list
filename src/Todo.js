const Todo = ({id, todo, completed, deleteTodo}) => {
    return (
        <div>
            <p>
                {todo} 
                <button onClick={() => deleteTodo(id)}>X</button>
            </p>

        </div>
    )
}

export default Todo;