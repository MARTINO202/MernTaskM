// src/App.js
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

const App = () => {
   const [filter, setFilter] = useState('all');

   return (
       <div>
           <h1>Task Management App</h1>
           <AddTask />
           <Filter setFilter={setFilter} />
           <TaskList filter={filter} />
       </div>
   );
};

export default App;