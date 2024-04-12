import { useTaskContext } from "../context/Context";

const DeleteConfirmationPopUp = ({
  setDeleteTaskId,
  deleteTaskId,
  setDeleteCOnfirmationPopup,
}) => {
  const { dispatch } = useTaskContext();
  const handleConfirmDelete = () => {
    console.log(deleteTaskId);
    dispatch({ type: "DELETE_TASK", payload: deleteTaskId });
    setDeleteTaskId(null);
    setDeleteCOnfirmationPopup(false);
  };
  const handleCancelDelete = () => {
    setDeleteTaskId(null);
    setDeleteCOnfirmationPopup(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md shadow-lg">
        <p className="text-black text-xl">Are you sure to delete this task?</p>
        <div className="flex justify-end mt-4">
          <button className="mr-4 text-red-500" onClick={handleConfirmDelete}>
            Yes
          </button>
          <button className="text-blue-500" onClick={handleCancelDelete}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopUp;
