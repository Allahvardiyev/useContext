import React from 'react'
import ShowTask from './ShowTask'

import {useContext } from "react";
import TasksContext from "./Task";
const TaskList = () => {
  const {tasks}=useContext(TasksContext)
  return (
    <div className='task-list'>
      {
        tasks.map((task,index)=>{
 return <ShowTask key={index} task={task} />
            
        })
      }
    </div>
  )
}

export default TaskList