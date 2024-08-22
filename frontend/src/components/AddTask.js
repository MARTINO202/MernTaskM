// src/components/AdddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const AddTask = () => {
   const [title, setTitle] = useState('');
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
       e.preventDefault();
       if (title) {
           dispatch(addTask({ title }));
           setTitle('');
       }
   };

   return (
       <form onSubmit={handleSubmit}>
           <input
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder="Add a new task"
           />
           <button type="submit">Add Task</button>
       </form>
   );
};

export default AddTask;