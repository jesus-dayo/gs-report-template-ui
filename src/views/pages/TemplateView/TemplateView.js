import React, { useState } from "react";
import RightActionBar from "../../../components/layout/RightActionBar";
import Button from "../../../components/Button/Button";
import TemplateAdd from "./TemplateAdd/index";

const TemplateView = () => {
  const [showAddUpdate, setShowAddUpdate] = useState();

  return (
    <div>
      <RightActionBar>
        <Button
          onClick={() => setShowAddUpdate(!showAddUpdate)}
          variant="secondary"
        >{`${showAddUpdate ? "Back to Dashboard" : "Add Template"}`}</Button>
      </RightActionBar>
      {showAddUpdate && <TemplateAdd />}
    </div>
  );
};

export default TemplateView;
