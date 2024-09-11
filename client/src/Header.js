import React, { useContext } from 'react'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import dataContext from './context/dataContext'

const Header = ({ title = "To do List" }) => {
  const {width} = useContext(dataContext)
  return (
    <header>
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />: width < 992 ? <FaTabletAlt /> : <FaLaptop />}
    </header>
  );
}

export default Header;
