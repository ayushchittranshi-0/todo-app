import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoItem = (props) => {
  //TodoItem Comp[onent]

  const [showEdit, setShowEdit] = useState(false);
  const [editBox, setEditbox] = useState("");

  let todo = props.liTask[props.uId][0];

  const editHandler = (uId) => {
    console.log(uId);
    //  e.preventDefault();
    let newkey;

    while (true) {
      newkey = Math.floor(Math.random() * 1000);
      if (Object.keys(props.liTask).includes(newkey) === false) break;
    }

    console.log(newkey);
    let tempTask = props.liTask[uId];
    console.log(tempTask, editBox);
    tempTask[0] = editBox;
    console.log(tempTask, editBox);

    let tempObj = props.liTask;
    delete tempObj[uId];
    tempObj[newkey] = tempTask;
    console.log(tempObj);
    props.setTask({ ...tempObj });

    let tempList = props.filterList.filter((item) => item !== uId);
    tempList.push(newkey);
    props.setFilterList(tempList);

    setShowEdit(false);
  };

  const checkHandler = (uId) => {
    let tempObj = props.liTask;
    tempObj[uId][1] = (tempObj[uId][1] + 1) % 2;
    props.setTask({ ...tempObj });
    if (props.currentFilter !== 0) {
      let tempList = props.filterList.filter((item) => item !== uId);
      props.setFilterList(tempList);
    }
  };

  const deleteHandler = (uId) => {
    let tempObj = props.liTask;
    delete tempObj[uId];
    console.log(tempObj);
    props.setTask({ ...tempObj });
    let tempList = props.filterList.filter((item) => item !== uId);
    props.setFilterList(tempList);
  };

  return (
    <React.Fragment>
      {showEdit && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editHandler(props.uId);
          }}
        >
          <div className="row border rounded mt-5 p-2">
            <input
              type="text"
              value={editBox}
              className="form-control"
              placeholder="Enter edit"
              onChange={(e) => {
                setEditbox(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button className="btn btn-primary col-1 m-1" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
      <div className="row align-items-center mt-1 p-2 ">
        <p
          className={
            props.liTask[props.uId][1] === 1
              ? "text-decoration-line-through col-9 m-0"
              : "text-decoration-none col-9 m-0"
          }
        >
          {todo}
        </p>
        <button
          className="btn col-1 m-0"
          id="btn-edit"
          onClick={() => {
            setShowEdit(!showEdit);
          }}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
            alt="edit-btn"
          />
        </button>
        <button
          id="btn-check"
          className="btn col-1 m-0"
          onClick={() => {
            checkHandler(props.uId);
          }}
        >
          <img
            alt="btn-check"
            src={
              props.liTask[props.uId][1] === 0
                ? "https://img.icons8.com/material-outlined/24/000000/unchecked-checkbox.png"
                : "https://img.icons8.com/ios-glyphs/30/000000/checked-checkbox.png"
            }
          />
        </button>
        <button
          className="btn col-1 m-0"
          id="btn-delete"
          onClick={() => deleteHandler(props.uId)}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
            alt="delete-btn"
          />
        </button>
        <hr />
      </div>
    </React.Fragment>
  );
};
export default TodoItem;
