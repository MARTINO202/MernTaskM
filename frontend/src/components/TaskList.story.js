// src/components/TaskList.stories.js
import React from 'react';
import TaskList from './TaskList';
import { Provider } from 'react-redux';
import store from '../store';

export default {
    title: 'TaskList',
    component: TaskList,
};

const Template = (args) => (
    <Provider store={store}>
        <TaskList {...args} />
    </Provider>
);

export const Default = Template.bind({});
Default.args = {};