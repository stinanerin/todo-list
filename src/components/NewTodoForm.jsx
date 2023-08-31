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
            className="flex justify-center items-center gap-6"
        >
            {/* 
                onChange in react is triggered every time we click a key (in v.js we use onInput)
                --> causes rerender when we update state variable
            */}
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                className="w-full border-2 rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
                placeholder="Enter new todo"
            />
            <Button text="Add" color="bg-primary" classes="" />
        </form>
    );
};

export default NewTodoForm;
