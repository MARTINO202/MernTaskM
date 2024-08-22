// src/components/AddTask.stories.js
import React from 'react';
import AddTask from './AddTask';

export default {
    title: 'AddTask',
    component: AddTask,
};

const Template = (args) => <AddTask {...args} />;

export const Default = Template.bind({});
Default.args = {};