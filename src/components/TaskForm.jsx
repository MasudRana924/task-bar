import { useState } from "react";
import { useTaskContext } from "../context/Context";
  import 'react-toastify/dist/ReactToastify.css';
const TaskForm = ({ setShowPopup }) => {
  const { dispatch } = useTaskContext();
  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };
  const [taskData, setTaskData] = useState({
    id: generateUniqueId(),
    title: "",
    description: "",
    tags: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted task data:", taskData);
    const tagsArray = taskData.tags.split(",").map((tag) => tag.trim());
    const newTaskData = { ...taskData, tags: tagsArray };
    // Dispatch an action to add the new task
    dispatch({ type: "ADD_TASK", payload: newTaskData });
    setTaskData({
      id: "",
      title: "",
      description: "",
      tags: "",
      priority: "",
    });
    setShowPopup(false);
    alert("Task is Created");
  };

  return (
    <div>
      <form
        className="mx-auto my-10 mt-36 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>
        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={taskData.title}
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
              value={taskData.description}
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
                value={taskData.tags}
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
                value={taskData.priority}
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
            Create new Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
