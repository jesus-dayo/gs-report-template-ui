import PropTypes from "prop-types";
import React, { useReducer } from "react";
import Modal from "react-modal/lib/components/Modal";
import { IoCloseCircle } from "react-icons/io5";
import InputText from "../../../../../components/InputText/InputText";
import InputSelect from "../../../../../components/InputSelect/InputSelect";

const defaultCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const initState = () => ({
  display: null,
  key: null,
  type: null,
  headerStyles: {},
  inputStyles: {},
  col: null,
  row: null,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error();
  }
};

const TemplateModal = ({
  template,
  dispatchTemplate,
  isOpen,
  customStyles = defaultCustomStyles,
  onClose,
}) => {
  const [state, dispatch] = useReducer(reducer, initState());
  console.log("template", template);
  console.log("dispatchTemplate", dispatchTemplate);
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <button onClick={onClose} className="absolute top-0 right-0 text-xl">
          <IoCloseCircle />
        </button>
        <div className="font-sans text-lg text-white bg-blue-400 p-2 flex">
          <h2>Header and Key Mapping</h2>
        </div>
        <div className="p-2 flex">
          <InputText
            label={"Display:"}
            id={"display"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE",
                payload: { display: e.target.value },
              })
            }
            value={state.display}
            placeholder="Enter display header"
          />
          <InputText
            label={"Key:"}
            id={"key"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE",
                payload: { key: e.target.value },
              })
            }
            value={state.key}
            placeholder="Enter the property key"
          />
          <InputSelect
            label={"Type:"}
            id={"type"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE",
                payload: { type: e.target.value },
              })
            }
            value={state.type}
            placeholder="Select the type"
            options={[
              {
                label: "String",
                value: "string",
              },
              {
                label: "Number",
                value: "number",
              },
            ]}
          />
        </div>
        <div className="p-2 flex">
          <div className="p-2">
            <h2 className="font-bold">Header Styles</h2>
            <InputText
              label={"Font Size:"}
              id={"fontSize"}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE",
                  payload: {
                    headerStyles: {
                      ...state.headerStyles,
                      fontSize: e.target.value,
                    },
                  },
                })
              }
              value={state.headerStyles.fontSize}
              placeholder="font size in pixels"
              labelStyle={"w-32"}
            />
          </div>
          <div className="border-solid border-l-2 h-full p-2">
            <h2 className="font-bold">Input Styles</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
};

TemplateModal.propTypes = {
  customStyles: PropTypes.object,
  dispatchTemplate: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  template: PropTypes.object,
};

export default TemplateModal;
