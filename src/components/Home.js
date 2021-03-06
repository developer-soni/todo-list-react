import React, { useEffect, useState } from "react";
import PopUp from "../modals/PopUp";
import { v4 as uuidv4 } from "uuid";
import Cards from "./Cards";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateArray = (item, index) => {
    let tempList = taskList;
    tempList[index] = item;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));

    setTaskList(tempList);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h2 className="pt-5">Dev.eloper's ToDo List</h2>
        <button className="btn btn-primary mt-5" onClick={() => setModal(true)}>
          Add Task
        </button>
      </div>

      <div className="task-container tasklistcont">
        {taskList.map((item, index) => (
          <Cards
            item={item}
            index={index}
            key={uuidv4()}
            deleteTask={deleteTask}
            updateArray={updateArray}
          />
        ))}
      </div>
      <PopUp toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Home;
