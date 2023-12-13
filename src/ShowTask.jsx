import React from 'react'
import { useState } from 'react'
import TaskCreate from './TaskCreate'

import {useContext } from "react";
import TasksContext from "./Task";

const ShowTask = ({task,onDelete,onUpdate}) => {

  const {editTaskById,handleDeleteById}=useContext(TasksContext)

  const [showEdit, setShowEdit] = useState(false)
   const handleDeleteClick=()=>{
    // onDelete(task.id)
    handleDeleteById(task.id)
   }
   const handleEditClick=()=>{
    setShowEdit(true )
   }
   const handleSubmit=(id,updateTitle,updateTaskDesc)=>{
    setShowEdit(false)
    // onUpdate(id,updateTitle,updateTaskDesc)
    editTaskById(id,updateTitle,updateTaskDesc)
   }
  return (
    <div className='task-show'>
      {showEdit ? (<TaskCreate task={task}  taskFormUpdate={true} onUpdate={handleSubmit}/>)  : (<div>
      <h3 className='task-title'>Goreviniz</h3>
        <p>{task.title}</p>
        <p>{task.taskDesc}</p>
        <div>
            <button className='task-delete' onClick={handleDeleteClick}>Sil</button>
            <button className='task-edit' onClick={handleEditClick}>Güncəllə</button>
        </div>
        </div>
        )}
      
    </div>
  )
}

export default ShowTask