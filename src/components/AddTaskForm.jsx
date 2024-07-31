import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 bg-transparent border-b border-pink-500 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 bg-transparent border-b border-pink-500 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
      />
      <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:from-pink-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
        Launch Task
      </button>
    </form>
  );
}

export default AddTaskForm;