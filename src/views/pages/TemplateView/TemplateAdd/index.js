import React, { useReducer, useState } from 'react';
import Button from '../../../../components/Button/Button';
import TemplateForm from './components/TemplateForm';
import TemplatePreview from './components/TemplatePreview';

const defaultRow = (column) => ({
  column,
  display: null,
  key: null,
  type: 'string',
  styles: {
    headerStyles: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    inputStyles: {
      fontSize: '12px',
    },
  },
});

const initialTemplate = {
  name: null,
  rows: [defaultRow(0)],
  globalStyles: {},
};

const UPDATE = 'UPDATE';
const UPDATE_ROW = 'UPDATE_ROW';
const ADD_ROW = 'ADD_ROW';
const DELETE_ROW = 'DELETE_ROW';
const MOVE_COLUMN_DOWN = 'MOVE_COLUMN_DOWN';
const MOVE_COLUMN_UP = 'MOVE_COLUMN_UP';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, ...action.payload };
    case UPDATE_ROW: {
      const { index, key, value } = action.payload;
      const newRows = [...state.rows];
      newRows[index][key] = value;
      return { ...state, rows: newRows };
    }
    case ADD_ROW: {
      return {
        ...state,
        rows: [...state.rows, defaultRow(state.rows.length)],
      };
    }
    case DELETE_ROW: {
      const newRows = [...state.rows];
      const { index } = action.payload;
      return {
        ...state,
        rows: [...newRows.splice(index, 1)],
      };
    }
    case MOVE_COLUMN_DOWN: {
      const newRows = [...state.rows];
      const { index } = action.payload;
      newRows[index].column = newRows[index].column + 1;
      newRows[index + 1].column = newRows[index + 1].column - 1;
      const temp = newRows[index];
      newRows[index] = newRows[index + 1];
      newRows[index + 1] = temp;
      return {
        ...state,
        rows: [...newRows],
      };
    }
    case MOVE_COLUMN_UP: {
      const newRows = [...state.rows];
      const { index } = action.payload;
      newRows[index].column = newRows[index].column - 1;
      newRows[index - 1].column = newRows[index - 1].column + 1;
      const temp = newRows[index];
      newRows[index] = newRows[index - 1];
      newRows[index - 1] = temp;
      return {
        ...state,
        rows: [...newRows],
      };
    }
    default:
      throw new Error();
  }
};

const TemplateAdd = () => {
  const [template, dispatchTemplate] = useReducer(reducer, initialTemplate);
  const [showPreview, setShowPreview] = useState(true);

  return (
    <div className="m-2 w-full h-full">
      <div className="w-full p-2 h-full border-l border-gray-200 ">
        <div className="w-full text-right pr-4">
          <Button onClick={() => setShowPreview(!showPreview)}>{`${
            showPreview ? 'Close Preview' : 'Open Preview'
          }`}</Button>
        </div>
      </div>
      <div className="m-2 flex w-full h-full">
        <TemplateForm template={template} dispatchTemplate={dispatchTemplate} />
        {showPreview && <TemplatePreview template={template} />}
      </div>
    </div>
  );
};

export default TemplateAdd;
