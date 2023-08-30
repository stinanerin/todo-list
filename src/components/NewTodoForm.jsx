import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                {/* 
                    onChange in react is triggered every time we click a key (in v.js we use onInput)
                    --> causes rerender when we update state variable
                */}
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
};

export default NewTodoForm;
