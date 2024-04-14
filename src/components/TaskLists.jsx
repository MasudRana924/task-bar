import React from "react";
import { useState } from "react";
import { useTaskContext } from "../context/Context";

const TaskLists = ({getSearchedTasks,handleDeleteTask,handleStarClick,handleEditTask}) => {

  return (
    <div>
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
            {getSearchedTasks?.map((task) => (
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
                        <span
                          key={`${task.id}-${index}`}
                          className={`tagIndex-${index}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="tag">{task.tags}</span>
                  )}
                </td>
                <td className="text-start">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3 ">
                    <button
                      className="text-red-500 w-16 text-xs"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-blue-500 w-16 text-xs"
                      onClick={() => handleEditTask(task)}
                    >
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
  );
};

export default TaskLists;
