import React, { useState } from 'react';

function EditTaskForm({ task, onSave, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task.id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <div>
        <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
          Save
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-300 px-2 py-1 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;