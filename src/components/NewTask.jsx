import React, { useState } from "react";

const NewTask = ({onAdd}) => {
  const [enteredTask, setEnteredTask] = useState(""); 

  const handleClick = () => {
    if(enteredTask.trim() === ""){
        return;
    }
    onAdd(enteredTask)
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4 ">
      <input
        type="text"
        className="w-64 bg-green-200 px-2 py-1 rounded-sm"
        onChange={(event) => setEnteredTask(event.target.value)}
        value={enteredTask}
      />
      <button className="text-green-700 hover:text-green-950" onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default NewTask;
