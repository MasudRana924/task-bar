import React from 'react';
import { useTaskContext } from './Context'; 

const TaskList = () => {
  const { state } = useTaskContext();

  return (
    <div>
      {state.tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
export default TaskList;