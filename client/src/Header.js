import React, { useContext } from 'react'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import dataContext from './context/dataContext'

/*js destructuring obj
const Header = ({title}) => {
 
  return (
    <header>
        <h1> {title} </h1> 
    </header>
  )
}
*/

//jsx
/*const Header = (props) => {
 
  return (
    <header>
        <h1> {props.title} </h1> 
    </header>
  )
}

Header.defaultProps = {
  title: "To do List"
}
export default Header
*/

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
