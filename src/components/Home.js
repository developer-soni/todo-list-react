import React from "react";

const Home = () => {
  return (
    <>
      <div className="header text-center">
        <h2 className="pt-5">Dev.eloper's ToDo List</h2>
        <button className="btn btn-primary mt-5">Add Task</button>
      </div>
      <div className="task-container"></div>
    </>
  );
};

export default Home;
