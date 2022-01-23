import React from "react";
import { Link } from "react-router-dom";

const ActionBar = () => {
  return (
    <div className="w-full">
      <Link to={"/"}>View Templates</Link>
      <Link to={"/add"}>Add Template</Link>
    </div>
  );
};

export default ActionBar;
