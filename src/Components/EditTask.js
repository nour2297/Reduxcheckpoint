import React,{useState} from 'react';
import Modal from 'react-modal';
import { edittask } from '../Redux/action';
import {useDispatch} from 'react-redux';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }

};
Modal.setAppElement('#root')
const EditTask = ({oldTask}) => {
const [modalIsOpen, setIsOpen] = useState(false);
const [newAction, setNewAction] = useState(oldTask.action);
const dispatch = useDispatch();
  //open the modal  
  function openModal() {
    setIsOpen(true);
  }
  //close the modal
  function closeModal() {
    setIsOpen(false);
  }
// handle edit 
 const handleSubmit=(e)=>{
     e.preventDefault();
     const editedtask={...oldTask,action:newAction};
     dispatch(edittask(editedtask));
     closeModal();

 }

    return (
        <div>
        <button onClick={openModal}>Edit</button>
        <Modal
         id="mdl"
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         style={customStyles}
         >
              <form onSubmit={handleSubmit}>
                  <input type="text" className="input" value={newAction} onChange={(e)=>setNewAction(e.target.value)} ></input>
                  <button type="submit" >Confirm</button>
                  <button onClick={closeModal}>Cancel</button>
              </form>
       </Modal>

        </div>
    )
}

export default EditTask
