import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    // const [dueDate, setDueDate] = useState('');

    const handleChangeName = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    // const handleChangeDescription = (e) => {
        
    //     const {description, value} = e.target
    
    //     if(description === "description"){
    //         setDescription(value)
    //     }
    // }

    // const handleChangeDueDate = (e) => {
        
    //     const {dueDate, value} = e.target
    
    //     if(dueDate === "dueDate"){
    //         setDueDate(value)
    //     }
    // }


    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        // taskObj["Due Date"] = dueDate
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChangeName} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChangeName} name = "description"></textarea>
                    </div>
                    {/* <div className = "form-group">
                        <label>Due By</label>
                        <textarea rows = "1" className = "form-control" value = {dueDate} onChange = {handleChangeDueDate} dueDate = "dueDate"></textarea>
                    </div> */}
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;