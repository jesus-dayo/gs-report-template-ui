import PropTypes from "prop-types";
import React from "react";

const TemplatePreview = ({ template = {} }) => {
  const { name, rows } = template;
  // display: null,
  // key: null,
  // type: "string",
  // styles: {
  //   headerStyles: {
  //     fontSize: "14px",
  //     fontWeight: "bold",
  //   },
  //   inputStyles: {
  //     fontSize: "12px",
  //   },
  // },

  return (
    <div className="flex-grow w-full text-left p-4 border-l-2 border-solid">
      <text className="text-lg font-bold">Preview</text>
      <text> - This is a preview of your report</text>
      <div className="border-gray-400 border-solid">
        <div className="w-full max-w-lg text-left mt-2">
          <div className="relative rounded-xl overflow-auto p-4">
            <div className="text-l mb-2">
              <span className="font-bold">Template: Name: </span>
              <span>{name}</span>
            </div>
            <table className="table-auto w-full text-sm">
              <thead>
                <tr className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  {rows.map((row) => (
                    <th key={row.key}>{row.display || "column"}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                <tr>
                  {rows.map((row, index) => (
                    <td
                      key={`col-${index}`}
                      className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
                    >
                      {row.type}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

TemplatePreview.propTypes = {
  template: PropTypes.object,
};

export default TemplatePreview;
