import TodoItem from "./TodoItem";
import NewTodoForm from "./NewTodoForm";

const TodoList = ({
    todos,
    toggleTodo,
    deleteTodo,
    toggleEditTodo,
    updateTodoTitle,
}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return todo.editing ? (
                    <NewTodoForm
                        {...todo}
                        updateTodoTitle={updateTodoTitle}
                        toggleEditTodo={toggleEditTodo}
                        key={todo.id}
                    />
                ) : (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        toggleEditTodo={toggleEditTodo}
                    />
                );
            })}
        </ul>
    );
};

export default TodoList;
