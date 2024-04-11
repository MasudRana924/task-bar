
import  { createContext, useContext, useReducer } from 'react';
const TaskContext = createContext();

// Define the initial state of our tasks (empty array)
const initialState = {
  tasks: [],
};

// Define how tasks can be updated based on actions
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    case 'DELETE_ALL':
      return { tasks: [] };
    case 'HANDLE_FAVORITE':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, favorite: !task.favorite } : task
        ),
      };
    default:
      return state;
  }
};

// Create a component to wrap our app and provide access to the tasks and actions
const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
};

// Create a custom hook to easily access the tasks and actions from any component
const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

// Export the TaskProvider and useTaskContext for use in other files
export { TaskProvider, useTaskContext };