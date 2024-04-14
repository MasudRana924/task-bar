import { useState } from "react";
import TaskForm from "./TaskForm";
import { useTaskContext } from "../context/Context";
import DeleteConfirmationPopUp from "./DeleteConfirmationPopUp";
import DeleteAllTaskConfirmationPopup from "./DeleteAllTaskConfirmationPopup";
import EditForm from "./EditForm";
import SearchBar from "./SearchBar";
import AddTaskButton from "../button/AddTaskButton";
import DeleteAllButton from "../button/DeleteAllButton";
import TaskLists from "./TaskLists";
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
    alert("add to favorite");
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
              <SearchBar
                searchTask={searchTask}
                setSearchTask={setSearchTask}
              />
              <AddTaskButton onClick={handleAddTaskClick} />
              <DeleteAllButton onClick={handleDeleteAllTasks} />
            </div>
          </div>
          <div className=" w-full p-4">
            <TaskLists
              getSearchedTasks={getSearchedTasks}
              handleDeleteTask={handleDeleteTask}
              handleStarClick={handleStarClick}
              handleEditTask={handleEditTask}
            />
          </div>
        </div>
      </div>

      {showPopup && (
        <TaskForm setShowPopup={setShowPopup} />
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
        <EditForm taskData={editedTask} setShowEditPopup={setShowEditPopup} />
      )}
    </section>
  );
};

export default AllTasks;
