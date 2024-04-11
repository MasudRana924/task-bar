const DeleteAllTaskConfirmationPopup = ({
  setAllDeleteCOnfirmationPopup,
  dispatch,
}) => {
  const handleConfirmDelete = () => {
    dispatch({ type: "DELETE_ALL" });
    setAllDeleteCOnfirmationPopup(false);
  };
  const handleCancelDelete = () => {
    setAllDeleteCOnfirmationPopup(false);
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

export default DeleteAllTaskConfirmationPopup;
