import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.js';

export const TaskContext = React.createContext({});

export default () => {

  const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem("tasks");
    return storage ? JSON.parse(storage) : [];
  }

  const [tasks, setTasks] = useState(getStateFromLocalStorage());

  const setAndStoreTasks = (tasks) => {
      setTasks(()=>tasks, localStorage.setItem("tasks", JSON.stringify(tasks)))
  }

  const addTask = (taskText) => {
    if(taskText.length === 0) return console.error('Aucune saisie');
    if (tasks.find(task=>task.text === taskText)){return console.error('Doublon')};
    const newTask = {text: taskText, done: false};
    const newTasks = [newTask, ...tasks];
    setAndStoreTasks(newTasks);
  }

  const removeTask = (taskToRemove) => {
    const updatedTasks = tasks.filter(task=>task.text !== taskToRemove.text);
    setAndStoreTasks(updatedTasks);
  }

  const toggleTask = (taskToToggle) => {
    const taskIndex = tasks.findIndex(task=>task.text === taskToToggle.text);
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
    setAndStoreTasks(updatedTasks);
  }

  const value = {tasks, addTask, removeTask, toggleTask};

  return (
          <TaskContext.Provider value={value}>
            <div className="content">
              <TaskInput />
              <div className="line" />
              <TaskList />
            </div>
          </TaskContext.Provider>
        );
}
