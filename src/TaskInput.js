import React, {useContext, useState} from 'react';
import { TaskContext } from './Content';
import './TaskInput.css';

const TaskInput = () => {

  const { addTask } = useContext(TaskContext);
  const emptyText = '';
  const [taskText, setTaskText] = useState(emptyText);

  const onChangeText = (e) => {
    setTaskText(e.target.value);
  }

  const addTaskText = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText(emptyText);
  }

  return (
    <div className="taskInputContainer">
      <form
      onSubmit={addTaskText}>
        <input type="text"
        className="taskTextInput"
        value={taskText}
        onChange={onChangeText}
        />
        <button>
          Valider
        </button>
      </form>
    </div> );
}

export default TaskInput;
