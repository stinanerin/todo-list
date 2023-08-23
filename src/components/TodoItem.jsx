const TodoItem = ({ id, completed, title, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <label htmlFor="todoCheckbox">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                    id="todoCheckbox"
                />
                {title}
            </label>
            {/*
                the item will be delted on render
                onClick={deleteTodo(id);}
            */}
            <button
                onClick={() => {
                    deleteTodo(id);
                }}
                className="button"
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
