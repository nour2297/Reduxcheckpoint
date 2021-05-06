import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { filtertask } from '../Redux/action'
import AddTask from './AddTask'
import Task from './Task'


const TaskList = () => {
    const dispatch = useDispatch();
    const tasklist=useSelector((state)=>state.tasks);
    const filter=useSelector((state)=>state.filter);
    //handle filter
    const handlefilter=()=>{
        dispatch(filtertask());
    }
    return (
        <div>

        <AddTask handlefilter={handlefilter} filter={filter}/>
       
        {filter
        ? tasklist
            .filter((task) => task.isDone)
            .map((el, index) => <Task tasks={el} key={index} />)
        : tasklist.map((el, index) => <Task tasks={el} key={index} />)} 
        </div>
    );
}

export default TaskList
