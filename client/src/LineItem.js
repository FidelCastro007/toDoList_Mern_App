import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete, focusInput }) => {
  if (!item) return null; // Ensure item is defined before rendering

  return (
    <li className="item">
      <input 
        type="checkbox"
        checked={item.checked} 
        onChange={() => handleCheck(item.id)}
         // Safely handle item.checked
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
      {item.item}
      </label>
      <FaTrashAlt
        role="button"
        onClick={() => { 
          handleDelete(item.id);
          focusInput();
        }}
        tabIndex="0"
        aria-label={`Delete ${item.item}`} // useful for screen readers
      />
    </li>
  );
};

export default LineItem;
