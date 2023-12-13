import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TasksContext= createContext();

function Provider({children}){
    const [tasks, setTasks] = useState([]);

  const createTask =async (title, taskDesc) => {
    const response =await axios.post("http://localhost:3004/posts", {
      title,
      taskDesc,
    });
    
    const createdTask = [
      ...tasks,
     response.data
    ];
    setTasks(createdTask);
  };
 const fetchTasks= async ()=>{
  const response= await axios.get('http://localhost:3004/posts')

  setTasks(response.data)
 }

 const handleDeleteById =async (id) => {
    await axios.delete(`http://localhost:3004/posts/${id}`)
   const afterDeletingTask = tasks.filter((task) => {
     return task.id !== id;
   });
   setTasks(afterDeletingTask);
 };
 const editTaskById = async(id, updateTitle, updateTaskDesc) => {
   await axios.put(`http://localhost:3004/posts/${id}`,{
     title:updateTitle,
     taskDesc:updateTaskDesc,
   })
   const updateTask = tasks.map((task) => {
     if (task.id === id) {
       return { id, title: updateTitle, taskDesc: updateTaskDesc };
     }
     return task;
   });
   setTasks(updateTask);
 };

  const shareValueAndMethods={
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    handleDeleteById ,
  }
    return <TasksContext.Provider value={shareValueAndMethods}> {children}</TasksContext.Provider>
     }

export {Provider}
export default TasksContext