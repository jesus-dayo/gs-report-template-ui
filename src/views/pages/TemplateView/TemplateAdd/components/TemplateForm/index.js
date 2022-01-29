import PropTypes from "prop-types";
import React from "react";
import InputText from "../../../../../../components/InputText/InputText";
import TemplateTable from "./TemplateTable";

const TemplateForm = ({ template, dispatchTemplate }) => {
  return (
    <div className="w-full p-4">
      <div className="mb-2 text-left">
        <text className="text-lg font-bold">Template Structure</text>
        <text> - Start adding rows and map the key</text>
      </div>
      <div className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputText
            label={"Name:"}
            id={"name"}
            onChange={(e) =>
              dispatchTemplate({
                type: "UPDATE",
                payload: { ...template, name: e.target.value },
              })
            }
            value={template.name}
            placeholder="Enter unique template name"
          />
        </div>
      </div>
      <div className="w-full text-left">
        <TemplateTable
          rows={template.rows}
          dispatchTemplate={dispatchTemplate}
        />
      </div>
    </div>
  );
};

TemplateForm.propTypes = {
  dispatchTemplate: PropTypes.any,
  template: PropTypes.any,
};

export default TemplateForm;
