import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from './Content';
import './TaskList.css';

const TaskList = () => {

  const {tasks} = useContext(TaskContext);

  return (
    <div className="taskListContainer">

      {
        tasks && tasks.map (
          task => <TaskItem key={task.text} task={task} />
        )
      }
    </div>
  );
}

export default TaskList;
