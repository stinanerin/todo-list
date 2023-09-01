import Button from "./Button";

const TodoItem = ({
    id,
    completed,
    title,
    toggleTodo,
    deleteTodo,
    toggleEditTodo,
}) => {
    return (
        <li className="flex justify-between items-center gap-6 mb-4 ">
            <div className="w-full flex items-center px-3 py-2 ">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                    id={`todoCheckbox-${id}`}
                    className="h-4 w-4 "
                />
                <label
                    htmlFor={`todoCheckbox-${id}`}
                    className={`ml-4 ${completed ? "line-through" : ""}`}
                >
                    {title}
                </label>
            </div>
            {/*
                the item will be delted on render
                onClick={deleteTodo(id);}
            */}
            <Button
                type="edit"
                aria="Edit todo"
                onClick={() => {
                    toggleEditTodo(id);
                }}
                disabled={completed}
            />
            <Button
                type="delete"
                aria="Delete todo"
                onClick={() => {
                    deleteTodo(id);
                }}
            />
        </li>
    );
};

export default TodoItem;
