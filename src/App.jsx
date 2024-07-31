import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
    setShowAddTask(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-float">
            Cosmic Tasks
          </h1>
          <button 
            onClick={() => setShowAddTask(!showAddTask)}
            className="mt-4 sm:mt-0 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            {showAddTask ? 'Close' : 'Add Task'}
          </button>
        </div>
        <div className="relative">
          {showAddTask && (
            <div className="mb-8 animate-fade-in">
              <AddTaskForm onAddTask={addTask} />
            </div>
          )}
          <TaskList 
            tasks={tasks} 
            onDeleteTask={deleteTask} 
            onToggleCompletion={toggleTaskCompletion}
          />
        </div>
      </div>
    </div>
  );
}

export default App;