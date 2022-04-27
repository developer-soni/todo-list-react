import React, { useState } from "react";
import PopUp from "../modals/PopUp";


const Home = () => {
    const [modal, setModal] = useState(false);
    const toggle = ()=>{
        setModal(!modal); 
    }

  return (
    <>
      <div className="header text-center">
        <h2 className="pt-5">Dev.eloper's ToDo List</h2>
        <button className="btn btn-primary mt-5" onClick={()=> setModal(true)}>Add Task</button>
      </div>
      <div className="task-container"></div>
      <PopUp toggle={toggle} modal={modal}/>
    </>
  );
};

export default Home;
