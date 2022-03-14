import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InputTask = (props) => {
  //Add Task Handler Function
  const [addTask, setAddtask] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    addTask.length !== 0 && setFormIsValid(true);
  }, [addTask]);

  const submitHandler = (event) => {
    event.preventDefault();
    let key;

    while (true) {
      key = Math.floor(Math.random() * 1000);
      if (Object.keys(props.liTask).includes(key) === false) break;
    }

    props.liTask[key] = [addTask, 0];
    props.setTask({ ...props.liTask });
    setAddtask("");
    setFormIsValid(false);

    if (props.currentFilter !== 2) {
      props.filterList.push(key);
      props.setFilterList([...props.filterList]);
    }
  };

  const addTaskHandler = (event) => {
    setAddtask(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row mt-3 ">
        <div className="col-auto">
          <label htmlFor="todoInput" className="col-form-label">
            Enter your Task:
          </label>
        </div>
        <div className="col">
          <input
            value={addTask}
            id="todoInput"
            placeholder="Type what you wanna do"
            className="form-control"
            type="text"
            onChange={addTaskHandler}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <button
            disabled={!formIsValid}
            className="btn btn-primary"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};
export default InputTask;
