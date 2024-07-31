import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleCompletion }) {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDeleteTask}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;