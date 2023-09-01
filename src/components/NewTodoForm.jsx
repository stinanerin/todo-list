import { useState } from "react";

import Button from "./Button";

const NewTodoForm = ({
    title: todoTitle,
    id,
    onSubmit,
    updateTodoTitle,
    toggleEditTodo,
}) => {
    // If todoTitle is passed - use it
    const [newItem, setNewItem] = useState(todoTitle || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        // If a todoTitle is passed - the form is used to edit an exisiting todo
        if (todoTitle) {
            updateTodoTitle(id, newItem);
            toggleEditTodo(id);
            return;
        }

        if (newItem === "") return;

        onSubmit(newItem);

        setNewItem("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex justify-between items-center gap-6 ${
                todoTitle && "mb-4"
            }`}
        >
            {/* 
                onChange in react is triggered every time we click a key (in v.js we use onInput)
                --> causes rerender when we update state variable
            */}
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                className={`w-full bg-elem_bg border border-border text-text placeholder-placeholder rounded-md px-3 py-2  backdrop-blur-lg`}
                placeholder="Enter todo"
            />
            <Button type="add" aria="Add todo" />
        </form>
    );
};

export default NewTodoForm;
