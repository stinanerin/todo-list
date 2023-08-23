import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                    // <TodoItem
                    //     id={todo.id}
                    //     completed={todo.completed}
                    //     title={todo.title}
                    //     key={todo.id}
                    // />
                );
            })}
        </ul>
    );
};

export default TodoList;
