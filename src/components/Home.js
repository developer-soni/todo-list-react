import React, { useState } from "react";
import PopUp from "../modals/PopUp";


const Home = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = ()=>{
        setModal(!modal); 
    }

    const saveTask = (taskObj) =>{
        let tempList = taskList;
        tempList.push(taskObj);
        setTaskList(tempList);
        setModal(false);
    }

  return (
    <>
      <div className="header text-center">
        <h2 className="pt-5">Dev.eloper's ToDo List</h2>
        <button className="btn btn-primary mt-5" onClick={()=> setModal(true)}>Add Task</button>
      </div>
      <div className="task-container">
        {taskList.map((item)=>
        <>
            <li>{item.Name}</li>
            <li>{item.Description}</li>
            <li>{item.Category}</li>
        </>
        )}

      </div>
      <PopUp toggle={toggle} modal={modal} save={saveTask}/>
    </>
  );
};

export default Home;
