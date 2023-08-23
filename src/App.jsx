import { useState, useEffect } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState(() => {
        const localArr = localStorage.getItem("ITEMS");
        if (localArr == null) return [];
        return JSON.parse(localArr);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
        // Every time our todos change update them in local storage as well
    }, [todos]);

    const toggleTodo = (id, completed) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    // todo.completed = completed;
                    return { ...todo, completed };
                }
                // Return the unmodified todo if the ID doesn't match
                return todo;
            });
        });
    };

    const deleteTodo = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    };

    const addTodo = (title) => {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ];
        });
    };

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1>Todo list</h1>
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </>
    );
}

export default App;
