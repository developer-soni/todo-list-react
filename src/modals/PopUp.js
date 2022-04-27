import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const PopUp = ({ modal, toggle }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // const {name, value} = e.target;

    if(name === "title"){
        setTitle(value)
    }
    else if(description === "description"){
        setDescription(value)
    }
    else{
        setCategory(category)
    }
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} animation="false">
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-floating mb-2">
              <input
                type="textarea"
                className="form-control"
                id="floatingInput"
                placeholder="Add Task Title here"
                value={title}
                onChange={handleChange}
                name="title"
              ></input>
              <label htmlFor="floatingInput">Task Title</label>
            </div>
            <div className="form-floating mb-2">
              <textArea
                type="textarea"
                className="form-control"
                placeholder="Add description here"
                id="floatingTextarea"
                style={{ height: "100px" }}
                value={description}
                onChange={handleChange}
                name="description"
              ></textArea>
              <label htmlFor="floatingTextarea">Description</label>
            </div>
            {/* <Button color="danger" value={category} onChange={handleChange}>
              Not Started
            </Button>{" "}
            <Button color="warning" value={category} onChange={handleChange}>
              In-Progress
            </Button>{" "}
            <Button color="success" value={category} onChange={handleChange}>
              Done
            </Button> */}

            <select
              className="form-select dropdown"
            //   aria-label="Default select example"
            //   value={category}
              onChange={handleChange}
              name="category"
            >
              <option defaultValue="1">Not Started</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
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
