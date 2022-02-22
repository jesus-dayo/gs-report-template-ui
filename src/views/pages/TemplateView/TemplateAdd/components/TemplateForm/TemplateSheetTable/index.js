import PropTypes from "prop-types";
import React, { useState } from "react";
import InputText from "../../../../../../../components/InputText/InputText";
import TemplateStyleModal from "../../TemplateStyleModal/index";
import Button from "../../../../../../../components/Button/Button";
import IconButton from "../../../../../../../components/IconButton/index";
import {
  AiOutlineArrowUp,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";

const TemplateSheetTable = ({ rows, dispatchTemplate }) => {
  const [openStyle, setOpenStyle] = useState(false);

  const handleAddStyle = (row) => {
    setOpenStyle(row);
  };

  const handleUpdate = ({ index, key, value }) => {
    dispatchTemplate({
      type: "UPDATE_ROW",
      payload: { index, key, value, parent: "sheets" },
    });
  };

  const handleAddRow = () =>
    dispatchTemplate({
      type: "ADD_ROW",
      payload: {
        parent: "sheets",
        defaultRow: { index: rows.length, name: "Sample Sheet Name" },
      },
    });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatchTemplate({
        type: "ADD_ROW",
        payload: { parent: "sheets" },
      });
    }
  };

  const handleDelete = (index) => {
    dispatchTemplate({
      type: "DELETE_ROW",
      payload: { index, parent: "sheets" },
    });
  };

  const handleUp = (index) => {
    dispatchTemplate({
      type: "MOVE_COLUMN_UP",
      payload: { index, parent: "sheets" },
    });
  };

  const handleDown = (index) => {
    dispatchTemplate({
      type: "MOVE_COLUMN_DOWN",
      payload: { index, parent: "sheets" },
    });
  };
  return (
    <div className="w-full border-gray-400 border-solid">
      <TemplateStyleModal
        isOpen={openStyle}
        onClose={() => setOpenStyle(null)}
        row={openStyle}
        handleUpdate={handleUpdate}
      />
      <div className="w-full text-left mt-2">
        <div className="w-full relative rounded-xl overflow-auto p-4">
          <div className="w-full text-left border-b-2 border-solid border-black mb-2">
            <h3 className="text-lg font-bold">Sheets</h3>
          </div>
          <div className="w-full text-right">
            <Button variant="primary" size="xs" onClick={handleAddRow}>
              Add Row
            </Button>
          </div>
          <table className="table-auto w-full text-sm">
            <thead>
              <tr className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                <th width={"5%"}>&uarr;&darr;</th>
                <th width={"20%"}>Index</th>
                <th width={"20%"}>Name</th>
                <th width={"5%"}>Styles</th>
                <th width={"15%"}></th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
              {rows.map((row, index) => (
                <tr
                  className="text-left"
                  key={`row-${index}`}
                  onKeyPress={handleKeyPress}
                >
                  <td className="text-left border-b border-slate-100 dark:border-slate-700 p-2">
                    {row.index != 0 && (
                      <IconButton
                        icon={<AiOutlineArrowUp />}
                        onClick={() => handleUp(index)}
                      />
                    )}
                    {row.index != rows.length - 1 && (
                      <IconButton
                        icon={<AiOutlineArrowDown />}
                        onClick={() => handleDown(index)}
                      />
                    )}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-2">
                    <InputText
                      id={`index-${index}`}
                      onChange={(e) =>
                        handleUpdate({
                          index,
                          key: "index",
                          value: e.target.value,
                        })
                      }
                      value={row.index}
                    />
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-2">
                    <InputText
                      id={`name-${index}`}
                      onChange={(e) =>
                        handleUpdate({
                          index,
                          key: "name",
                          value: e.target.value,
                        })
                      }
                      value={row.name}
                    />
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-2">
                    <IconButton
                      onClick={handleAddStyle}
                      icon={<AiOutlinePlus className="m-auto" />}
                    />
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-2">
                    {rows.length > 1 && (
                      <Button
                        variant="error"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

TemplateSheetTable.propTypes = {
  dispatchTemplate: PropTypes.func,
  rows: PropTypes.object,
};

export default TemplateSheetTable;
