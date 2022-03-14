import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ListTasks from "./Components/ListTasks.js";
import InputTask from "./Components/InputTask.js";

function App() {
  // Root App Component
  const [liTask, setTask] = useState({});
  const [filterList, setFilterList] = useState(Object.keys(liTask));
  const [currentFilter, setCurrentFilter] = useState(0);

  return (
    <div className="container">
      <div className="row mt-3">
        <h1 className="page-header">Todo App</h1>
      </div>
      <hr />
      <InputTask
        liTask={liTask}
        setTask={setTask}
        currentFilter={currentFilter}
        filterList={filterList}
        setFilterList={setFilterList}
      ></InputTask>
      <ListTasks
        liTask={liTask}
        setTask={setTask}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        filterList={filterList}
        setFilterList={setFilterList}
      ></ListTasks>
    </div>
  );
}

export default App;
