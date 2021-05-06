import
{ ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,

}from "./actionTypes"
const inistialstate={
  tasks: [{id:Math.random(),action:"wake up",isDone:false}],
  filter:false,
};
const taskreducer=(state=inistialstate,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks:[...state.tasks, payload]
            };
         case COMPLETE_TASK:
             return {
                 ...state,
                 tasks:state.tasks.map((el)=>el.id===payload ? {...el,isDone:!el.isDone} : el),
                };
           
    case DELETE_TASK:
        return{
            ...state,
            tasks: state.tasks.filter((el)=>el.id!==payload),
        };
        case EDIT_TASK:
            return{
                ...state,
                tasks:state.tasks.map((el)=>el.id===payload.id?payload:el),
            }
            case FILTER_TASK:
                return{
                    ...state,
                    filter:!state.filter,
                }
        default:
            return state;
    }
  

};
export default taskreducer;
