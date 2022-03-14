import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import FilterComp from "./FilterComp.js";
import TodoItem from "./TodoItem.js";

const ListTasks = (props) => {
  //List of Tasks Component

  const filterHandler = (x) => {
    props.setCurrentFilter(x);
    let tempObj = [];
    if (x === 0) {
      tempObj = Object.keys(props.liTask);
    } else if (x === 1) {
      tempObj = Object.keys(props.liTask).filter(
        (key) => props.liTask[key][1] === 0
      );
    } else {
      tempObj = Object.keys(props.liTask).filter(
        (key) => props.liTask[key][1] === 1
      );
    }
    props.setFilterList(tempObj);
  };

  let disp = <p>Nothing to Show!</p>;

  if (props.filterList.length !== 0) {
    disp = (
      <React.Fragment>
        {props.filterList.map((key) => {
          return (
            <TodoItem
              liTask={props.liTask}
              setTask={props.setTask}
              key={key}
              uId={key}
              currentFilter={props.currentFilter}
              filterList={props.filterList}
              setFilterList={props.setFilterList}
            />
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <FilterComp
        filterHandler={filterHandler}
        filterTodo={props.currentFilter}
      />
      {disp}
    </React.Fragment>
  );
};
export default ListTasks;
