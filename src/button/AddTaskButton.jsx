import React from "react";

const AddTaskButton = ({ onClick }) => {
  return (
    <button
      className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
      onClick={onClick}
    >
      Add Task
    </button>
  );
};

export default AddTaskButton;