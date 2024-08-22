// src/components/EditTask.js (updated)
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../store/taskSlice';

const EditTask = ({ task, setEditingTask }) => {
    const [title, setTitle] = useState(task.title);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTask({ id: task._id, task: { ...task, title } }));
        setEditingTask(null); // Close editing mode
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditingTask(null)}>Cancel</button>
        </form>
    );
};

export default EditTask;