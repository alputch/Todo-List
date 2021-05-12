import React, { useContext } from 'react';
import {TaskContext} from './Content';
import './TaskItem.css';

const TaskItem = ({task}) => {

  const {removeTask, toggleTask} = useContext(TaskContext);

  return (
          <div className={task.done ? "taskItem done" : "taskItem"}>

            <div
            className="item"
            onClick={()=>toggleTask(task)}>
              <span className="taskItemText">{task.text}</span>
              <span className="taskItemDone">
                { task.done && <img src="logoValidate.png" width="14px" height="14px" alt="validationLogo"/> }
              </span>
            </div>

            <div className="taskDelete"
            onClick={()=>{removeTask(task)}}>
              X
            </div>

          </div>
        );
}

export default TaskItem;
