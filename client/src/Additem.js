import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import dataContext from './context/dataContext';

const AddItem = () => {
  const { newItem, setNewItem, handleSubmit, focusInput, inputRef } = useContext(dataContext);

  const onSubmit = (e) => {
    handleSubmit(e);
    focusInput(); // Re-focus input after item is added
  };

  return (
    <form className='addForm' onSubmit={onSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type="text"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type='submit' aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
