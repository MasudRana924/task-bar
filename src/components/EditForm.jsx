import React from "react";
import { useTaskContext } from "../context/Context";
import { useState } from "react";

const EditForm = ({ taskData, setShowEditPopup }) => {
  const { dispatch } = useTaskContext();
  const [editedTaskData, setEditedTaskData] = useState(taskData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTaskData({ ...editedTaskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT_TASK", payload: editedTaskData });
    setShowEditPopup(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-24">
      <div className="max-h-[100vh] overflow-auto scrollbar-hidden">
        <form
          className="mx-auto my-10 mt-36 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Edit Task
          </h2>
          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                value={editedTaskData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                value={editedTaskData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  value={editedTaskData.tags}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  value={editedTaskData.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
