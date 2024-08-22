// src/components/TaskList.js (updated)
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, updateTask } from '../store/taskSlice';
import EditTask from './EditTask';

const TaskList = ({ filter }) => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleToggleComplete = (task) => {
        dispatch(updateTask({ id: task._id, task: { ...task, completed: !task.completed } }));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true; // all tasks
    });

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task._id}>
                        {editingTask === task._id ? (
                            <EditTask task={task} setEditingTask={setEditingTask} />
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleComplete(task)}
                                />
                                {task.title}
                                <button onClick={() => setEditingTask(task._id)}>Edit</button>
                                <button onClick={() => handleDelete(task._id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;