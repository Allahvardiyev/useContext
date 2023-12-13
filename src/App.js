import "./App.css";
import TaskCreate from "./TaskCreate";
import TaskList from "./TaskList";
import { useEffect,useContext } from "react";
import TasksContext from "./Task";
function App() {
  const {fetchTasks}=useContext(TasksContext)
  useEffect(()=>{
    fetchTasks();
  
  },[])
  

  return (
    <div className="App">
      <TaskCreate/>
      <h1>Görevlər</h1>
      <TaskList/>
    </div>
  );
}

export default App;
