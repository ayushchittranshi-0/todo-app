import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FilterComp = (props) => {
  return (
    <div className="row mt-3 mb-5">
      <button
        className="btn col-4 m-0 btn-outline-success"
        onClick={() => {
          props.filterHandler(0);
        }}
      >
        All
      </button>
      <button
        className="btn col-4 m-0 btn-outline-success"
        onClick={() => {
          props.filterHandler(1);
        }}
      >
        Unfinished
      </button>
      <button
        className="btn btn-outline-success col-4 m-0"
        value={2}
        onClick={() => {
          props.filterHandler(2);
        }}
      >
        Finished
      </button>
    </div>
  );
};
export default FilterComp;
