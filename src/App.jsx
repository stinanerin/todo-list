import { useState, useEffect } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

import "./index.css";

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
                    console.log(completed);
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
                {
                    id: crypto.randomUUID(),
                    title,
                    completed: false,
                    editing: false,
                },
            ];
        });
    };

    const toggleEditTodo = (todoToUpdateId) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todoToUpdateId === todo.id) {
                    return { ...todo, editing: !todo.editing };
                }
                return todo;
            });
        });
    };
    const updateTodoTitle = (todoToUpdateId, updatedTitle) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todoToUpdateId === todo.id) {
                    return { ...todo, title: updatedTitle };
                }
                return todo;
            });
        });
    };

    return (
        <div className=" max-w-lg mx-3 mb-5 xs:mx-auto flex justify-center  ">
            <div className="w-full ">
                <Header />

                <NewTodoForm onSubmit={addTodo} />
                <h2 className="my-6 text-xl md:text-2xl  uppercase font-bold tracking-tight text-text ">
                    Todo list
                </h2>
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    toggleEditTodo={toggleEditTodo}
                    updateTodoTitle={updateTodoTitle}
                />
            </div>
        </div>
    );
}

export default App;
