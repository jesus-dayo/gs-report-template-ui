import PropTypes from "prop-types";
import React from "react";
import InputText from "../../../../../../components/InputText/InputText";
import DragDrop from "../../../../../../components/DragDrop/DragDrop";
import { uploadTemplate } from "../../../../../../services/service";

const TemplateForm = ({ template, dispatchTemplate }) => {
  const handleUpload = async (file) => {
    const json = await uploadTemplate(
      file,
      template.name,
      template.description
    );
    dispatchTemplate({ type: "JSON", payload: json });
  };

  return (
    <div className="w-full p-4">
      <div className="mb-2 text-left">
        <text className="text-lg font-bold">Template Structure</text>
        <text> - Start by uploading your excel file template</text>
      </div>
      <div className="mb-6 w-full text-left">
        <DragDrop onDrop={handleUpload} />
      </div>
      <div className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputText
            label={"*Name:"}
            id={"name"}
            onChange={(e) =>
              dispatchTemplate({
                type: "UPDATE",
                payload: {
                  ...template,
                  name: e.target.value?.replace(" ", ""),
                },
              })
            }
            value={template.name}
            maxLength={20}
            placeholder="Enter unique template name without spaces (max 20 char)"
          />
        </div>
      </div>
      <div className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputText
            label={"*Description:"}
            id={"description"}
            onChange={(e) =>
              dispatchTemplate({
                type: "UPDATE",
                payload: { ...template, description: e.target.value },
              })
            }
            value={template.description}
            maxLength={300}
            placeholder="Enter description (max 300 char)"
          />
        </div>
      </div>
    </div>
  );
};

TemplateForm.propTypes = {
  dispatchTemplate: PropTypes.any,
  template: PropTypes.any,
};

export default TemplateForm;
