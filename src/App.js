
import './App.css';
import { useState } from "react";

function App() {
const [todolist,settodolist]=useState([]);
const [newtask,setnewtask]=useState("")
const handlechange=(event)=>{
setnewtask(event.target.value);
};
const addtask=()=>{
 
  const task={
    id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id+1,
    taskName: newtask,
    completed:false
  }
  const newtodolist=[...todolist,task];
  settodolist(newtodolist);
};
const deletetask=(taskid)=>{
const newtodolist=todolist.filter((task)=>{
return task.id !== taskid;
});
settodolist(newtodolist)
};
const completetask=(id)=>{
  settodolist(
    todolist.map((task)=>{
      if (task.id===id){

        return{...task,completed:true};
      }
      else{
        return task;
      }
    })
  )
}
  return (
    <div className="app">
      <div className="add-list">
<input   onChange={handlechange} type='text' placeholder='Enter your task'></input>
<button  onClick={() => newtask && addtask()}>Add Task</button>
</div>

<div className="list">
{todolist.map((task)=>{
  return(
  <div  className={`todos-wrap ${task.completed && "completed"}`}>
    <h1>{task.taskName}</h1>
    <button onClick={()=> deletetask(task.id)} className='delete'>Delete</button>
    <button onClick={()=> completetask(task.id)} className='completed'>completed</button>
    </div>
    )
})}
</div>
    </div>
  );
}

export default App;
