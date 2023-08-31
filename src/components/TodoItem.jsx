import Button from "./Button";

const TodoItem = ({
    id,
    completed,
    title,
    editing,
    toggleTodo,
    deleteTodo,
    toggleEditTodo,
}) => {
    return (
        <li className="flex justify-between items-center gap-6 mb-4">
            <div className="w-full">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                    id="todoCheckbox"
                    className="m-3"
                />
                <label htmlFor="todoCheckbox">{title}</label>
            </div>
            {/*
                the item will be delted on render
                onClick={deleteTodo(id);}
            */}
            <Button
                text="Edit"
                color="bg-secondary"
                onClick={() => {
                    toggleEditTodo(id);
                }}
            />
            <Button
                text="Delete"
                color="bg-danger"
                onClick={() => {
                    deleteTodo(id);
                }}
            />
        </li>
    );
};

export default TodoItem;
