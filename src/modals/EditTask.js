import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // const {name, value} = e.target;

    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(()=>{
      setTitle(taskObj.Name)
      setDescription(taskObj.Description)
      setCategory(taskObj.Category)
  }, [])

  const handleUpdate = (e)=>{
      e.preventDefault();
      let tempObj ={};
      tempObj['Name'] = title;
      tempObj['Description'] = description;
      tempObj['Category'] = category;

      updateTask(tempObj);

  }

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} animation="false">
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group mb-2">
              <label>Task Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={handleChange}
                name="title"
              />
            </div>
            <div className="form-group mb-2">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Task Status</label>
              <select
                className="form-select dropdown"
                aria-label="Default select example"
                value={category}
                onChange={(e) => {
                  const select = e.target.value;
                  setCategory(select);
                }}
              >
                <option value="">Please Select</option>
                <option value="1">Not Started</option>
                <option value="2">In Progress</option>
                <option value="3">Done</option>
              </select>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditTask;
