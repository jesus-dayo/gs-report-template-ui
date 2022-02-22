import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import Button from "../../../../../../components/Button/Button";
import { prettyPrintJson } from "pretty-print-json";

const TemplatePreview = ({ template = {} }) => {
  const jsonContainer = useRef(null);

  useEffect(() => {
    jsonContainer.current.innerHTML = prettyPrintJson.toHtml(template);
  });

  return (
    <div className="flex-grow w-full text-left p-4 border-l-2 border-solid">
      <text className="text-lg font-bold">Preview</text>
      <text> - This is a preview of your report</text>
      <div>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(template));
            alert("Copy to Clipboard was successful.");
          }}
        >
          Copy JSON to Clipboard
        </Button>
      </div>
      <div className="border-gray-400 border-solid">
        <div className="w-full text-left mt-2">
          <pre
            className="relative rounded-xl overflow-auto p-4"
            ref={jsonContainer}
          ></pre>
        </div>
      </div>
    </div>
  );
};

TemplatePreview.propTypes = {
  template: PropTypes.object,
};

export default TemplatePreview;
