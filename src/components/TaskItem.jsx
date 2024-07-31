import React from 'react';

function TaskItem({ task, onDelete, onToggleCompletion }) {
  return (
    <li className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-filter backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-grow">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleCompletion(task.id)}
            className="form-checkbox h-5 w-5 text-pink-500 rounded-full transition duration-150 ease-in-out"
          />
          <div className="flex-grow">
            <h3 className={`font-semibold text-lg ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
              {task.title}
            </h3>
            <p className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-300'}`}>
              {task.description}
            </p>
          </div>
        </div>
        <button 
          onClick={() => onDelete(task.id)} 
          className="text-red-500 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ml-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;