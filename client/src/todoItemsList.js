import React, { useContext } from 'react';
import LineItem from './LineItem';
import dataContext from './context/dataContext';

const ItemsList = () => {
  const { searchResults, handleCheck, handleDelete, focusInput } = useContext(dataContext);
// Filter items based on the search input with added validation
  return (
    <ul>
      {searchResults.map((item) => (
        <LineItem 
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          focusInput={focusInput}
        />
      ))
      }
    </ul>
  );
};


export default ItemsList;
