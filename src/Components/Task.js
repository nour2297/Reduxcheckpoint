import React from 'react'
import { completetask, deletetask} from '../Redux/action';

import EditTask from './EditTask';
import { useDispatch } from 'react-redux'

const Task = ({ tasks }) => {
    const dispatch = useDispatch();
    return (
      <div className="task" id={tasks.isDone ? "dim" : ""}>
        <h5 id={tasks.isDone ? "done" : ""}> {tasks.action} </h5>
        <div className="task-btn">
          <button onClick={() => dispatch(completetask(tasks.id))}>
            {" "}
            {tasks.isDone ? "undo" : "complete"}{" "}
          </button>
          <EditTask oldTask={tasks}/>
          <button onClick={() => dispatch(deletetask(tasks.id))}>Delete</button>
        </div>
      </div>
    );
  };

export default Task;
