import React,{useState} from 'react'
import { addtask, filtertask } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = ({e,handlefilter,filter}) => {
     const dispatch = useDispatch();
    const [text, setText] = useState("")

     //handle Add
     const handleAdd=()=>{
       text.trim()?
         dispatch(addtask({id:Math.random(),action:text,isDone:false})):
         alert ("please enter a task");
         setText("");
        };


    return (
        <div>
            <h5 className="title"> My To Do List</h5>
            <input type="text" 
            value={text} className="input"
             placeholder="Enter a task please"
              onChange={(e)=>setText(e.target.value)}/>
            <button type="submit" onClick={handleAdd} >Add</button>
            <button  onClick={handlefilter} >{filter ? "all" : "filter"}</button>
        </div>
    )
}

export default AddTask
