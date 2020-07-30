import React from "react";
import {Roller} from "react-spinners-css";
import "./styles.css";

function Loading() { 
  return (
    <div className="loading-div">
      <Roller color="#DA552F"/>
    </div>
  );
}

export default Loading;