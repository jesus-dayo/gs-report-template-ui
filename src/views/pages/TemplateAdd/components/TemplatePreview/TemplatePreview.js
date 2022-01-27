import PropTypes from "prop-types";
import React from "react";

const TemplatePreview = ({ template = {} }) => {
  console.log("template", template);
  return (
    <div className="flex-grow w-full h-full border-l border-gray-200 text-left p-4">
      <text className="text-lg font-bold">View</text>
      <text>
        {" "}
        - Saving the template will show you a table view of your report
      </text>
      <div className="border-gray-400 border-solid">
        <div className="w-full max-w-lg text-left mt-2">
          <div className="relative rounded-xl overflow-auto p-4">
            <table className="table-auto w-full text-sm">
              <thead>
                <tr className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                <tr>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    Malcolm Lockyer
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {" "}
                    1961
                  </td>
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
