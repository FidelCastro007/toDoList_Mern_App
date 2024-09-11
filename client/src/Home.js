import React, { useContext } from 'react';
import dataContext from './context/dataContext';
import ItemsList from './todoItemsList';

const Home = () => {
  const { items,fetchError, isLoading, searchResults} = useContext(dataContext); // default to empty array

  console.log('Home props:', { fetchError, isLoading, searchResults });

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading items...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{`Error : ${fetchError}`}</p>}
      {!isLoading && !fetchError && (searchResults.length > 0 ? <ItemsList items={searchResults} Items={items} /> : <p style={{ marginTop: "2rem" }}>No Items to display</p>)}
    </main>
  );
};

export default Home;
