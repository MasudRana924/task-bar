import { useState } from "react";
import TaskForm from "./TaskForm";
import { useTaskContext } from "../context/Context";
import DeleteConfirmationPopUp from "./DeleteConfirmationPopUp";
import DeleteAllTaskConfirmationPopup from "./DeleteAllTaskConfirmationPopup";
import EditForm from "./EditForm";

const AllTasks = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleAddTaskClick = () => {
    setShowPopup(true);
  };
  const { state, dispatch } = useTaskContext();
  // here delete all tasks
  const [AlldeleteConfirmationPopup, setAllDeleteCOnfirmationPopup] =
    useState(false);
  const handleDeleteAllTasks = () => {
    setAllDeleteCOnfirmationPopup(true);
  };

  // search section start
  const [searchTask, setSearchTask] = useState("");
  const getSearchedTasks = state.tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTask.toLowerCase())
  );
  // single task delete section
  const [deleteCOnfirmationPopup, setDeleteCOnfirmationPopup] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const handleDeleteTask = (taskId) => {
    console.log(taskId);
    setDeleteTaskId(taskId);
    setDeleteCOnfirmationPopup(true);
  };

  // handle favorite
  const handleStarClick = (taskId) => {
    dispatch({ type: "HANDLE_FAVORITE", payload: taskId });
  };

  //edit section
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const handleEditTask = (taskId) => {
    setEditedTask(taskId);
    setShowEditPopup(true);
  };
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <form>
                <div className="flex">
                  <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                      placeholder="Search Task"
                      value={searchTask}
                      onChange={(e) => setSearchTask(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 h-full rounded-e-lg text-black "
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
              <button
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={handleAddTaskClick}
              >
                Add Task
              </button>
              <button
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={handleDeleteAllTasks}
              >
                Delete All
              </button>
            </div>
          </div>
          <div className=" w-full p-4">
            {getSearchedTasks.length === 0 ? (
              <div>
                <h1 className="text-red-500 text-xl text-center">
                  Task List is empty!
                </h1>
              </div>
            ) : (
              <table className="table-fixed w-full xl:w-full">
                <thead>
                  <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="text-start p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      Title
                    </th>
                    <th className="text-start p-4 pb-8 text-sm font-semibold capitalize w-full">
                      Description
                    </th>
                    <th className="text-start p-4 pb-8 text-sm font-semibold capitalize md:w-[250px]">
                      Tags
                    </th>
                    <th className="text-start p-4 pb-8 text-sm font-semibold capitalize md:w-[120px]">
                      Priority
                    </th>
                    <th className="text-start p-4 pb-8 text-sm font-semibold capitalize md:w-[120px]">
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getSearchedTasks?.map((task, index) => (
                    <tr
                      key={task.id}
                      className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                    >
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`icon icon-tabler icon-tabler-star ${
                            task.favorite ? "favorite-star" : ""
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          onClick={() => handleStarClick(task.id)}
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 17.75l-6.172 3.245l1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
                        </svg>
                      </td>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>
                        {Array.isArray(task.tags) ? (
                          <div>
                            {task.tags.map((tag, index) => (
                              <span key={`${task.id}-${index}`} className={`tagIndex-${index}`}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="tag">{task.tags}</span>
                        )}
                      </td>
                      <td className="text-center">{task.priority}</td>
                      <td>
                        <div className="flex items-center justify-center space-x-3 ">
                          <button
                            className="text-red-500 w-16 text-xs"
                            onClick={() => handleDeleteTask(task.id)}
                          >
                            Delete
                          </button>
                          <button className="text-blue-500 w-16 text-xs" onClick={() => handleEditTask(task)}>
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-24">
          <div className="max-h-[100vh] overflow-auto scrollbar-hidden">
            <TaskForm setShowPopup={setShowPopup}/>
          </div>
        </div>
      )}
      {/* all task delete confirmation message  */}
      {AlldeleteConfirmationPopup && (
        <DeleteAllTaskConfirmationPopup
          setAllDeleteCOnfirmationPopup={setAllDeleteCOnfirmationPopup}
          dispatch={dispatch}
        />
      )}
      {/* Single Delete confirmation */}
      {deleteCOnfirmationPopup && (
        <DeleteConfirmationPopUp
          setDeleteTaskId={setDeleteTaskId}
          deleteTaskId={deleteTaskId}
          setDeleteCOnfirmationPopup={setDeleteCOnfirmationPopup}
        />
      )}
      {/* edit section */}
      {showEditPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-24">
          <div className="max-h-[100vh] overflow-auto scrollbar-hidden">
             <EditForm
             taskData={editedTask}
             setShowEditPopup={setShowEditPopup}
           />
          </div>
        </div>
      )}
    </section>
  );
};

export default AllTasks;
