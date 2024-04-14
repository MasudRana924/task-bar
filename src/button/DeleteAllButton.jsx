import React from "react";

const DeleteAllButton = ({ onClick }) => {
  return (
    <button
      className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
      onClick={onClick}
    >
      Delete All
    </button>
  );
};

export default DeleteAllButton;