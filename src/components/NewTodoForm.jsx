import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (newItem === "") return;

        onSubmit(newItem);

        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">Add todo</label>
                {/* 
                        onChange in react is triggered every time we click a key (in v.js we use onInput)
                        --> causes rerender when we update state variable
                        */}
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
};

export default NewTodoForm;
