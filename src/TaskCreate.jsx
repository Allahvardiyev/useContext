import React from 'react'
import { useState } from 'react'

import {useContext } from "react";
import TasksContext from "./Task";

const TaskCreate = ({task,taskFormUpdate,onUpdate}) => {

  const {editTaskById, createTask}=useContext(TasksContext)

    const [title, setTitle] = useState(task ? task.title:'')
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc:'')
   
    const handleChange=(event)=>{
          setTitle(event.target.value) 
    }
    const handleTaskChange=(event)=>{
        setTaskDesc(event.target.value) 
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    if(taskFormUpdate){
     onUpdate(task.id,title,taskDesc)
    // editTaskById(task.id,title,taskDesc)
    }
    else{
      // onCreate(title,taskDesc) 
      createTask(title,taskDesc)
    }
    setTitle('')
    setTaskDesc('')
}
  return (
    <div>
      {taskFormUpdate?  <div className='task-update'>
    <h3>Lütfən Task duzenleyiniz!</h3>
    <form className='task-form'>
        <label className='task-label'>Baslik duzenleyiniz!</label>
        <input value={title} onChange={handleChange} className='task-input' />
        <label className='task-label'>Task duzenleyiniz!</label>
        <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={5}/>
        <button onClick={handleSubmit} className='task-button update-button'>Düzənlə</button>
    </form>
    </div>: 
    <div className='task-create'>
    <h3>Lütfən Task Ekleyiniz!</h3>
    <form className='task-form'>
        <label className='task-label'>Baslik</label>
        <input value={title} onChange={handleChange} className='task-input' />
        <label className='task-label'>Task Giriniz!</label>
        <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={5}/>
        <button onClick={handleSubmit} className='task-button'>Oluştur</button>
    </form>
    </div>}
    </div>
   
  )
}

export default TaskCreate