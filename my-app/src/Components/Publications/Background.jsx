import React, { Fragment } from "react";
import "./Background.css";

function Background() {
  return (
    <Fragment>
      <div className="container-fluid background-color mb-5">
        <div className="row">
          <div className="col-12">
            <div className="pub-head">
              <h1 style={{ color: "white" }}>Publications </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="atom-head">atom insight</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Background;
