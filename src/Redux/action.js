import
{ ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,

}from "./actionTypes"
//adding task
export const addtask=(newtask)=>{
    return{
        type:ADD_TASK,
        payload:newtask,

    };
};
//complete task 
export const completetask=(id)=>{
    return {
        type:COMPLETE_TASK,
        payload:id,
    };
};
//delete task 
export const deletetask=(id)=>{
    return {
        type:DELETE_TASK,
        payload:id,
    };
};
//edit task
export const edittask=(editedtask)=>{
    return {
        type:EDIT_TASK,
        payload:editedtask,
    };
};
//filter task
export const filtertask=()=>{
    return {
        type:FILTER_TASK,
        
    };
};

