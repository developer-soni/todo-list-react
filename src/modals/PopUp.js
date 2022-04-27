import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const PopUp = ({ modal, toggle, save }) => {
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
  //   const handleCat = (e) => {
  //     const cat = e.target.name;
  //     const value = e.target.value;
  //     // const cat = e.target.category;
  //     if(cat === "1")
  //       setCategory(value);

  //   };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = title;
    taskObj["Description"] = description;
    taskObj["Category"] = category;

    save(taskObj);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} animation="false">
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PopUp;
