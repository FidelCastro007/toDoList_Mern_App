import React, { useContext } from 'react'
import dataContext from './context/dataContext';

const Footer = () => {
  const {items} = useContext(dataContext)
    const year = new Date();
    const length = items.length
  return (
    <footer> Copyright &copy; {year.getFullYear()}
    <br />
     {length} List {length === 1? "item": "items"} </footer>
  )
}

export default Footer