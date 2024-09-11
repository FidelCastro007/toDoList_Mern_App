import { useState, useRef, useEffect, createContext} from 'react';
import api from "../Api/todos"
import useAxiosFetch from "../hooks/useAxiosFetch";
import useWindowSize from "../hooks/useWindowSize";

const dataContext = createContext({})

export const DataProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const inputRef = useRef()
    const {width} = useWindowSize()
    const {data, fetchError, isLoading} = useAxiosFetch(`${process.env.REACT_APP_BACKEND_URL}/Api/todos`)
  
   useEffect (() => {
    setItems(data)
  }, [data])
    
  useEffect(() => {
    const filterResults = items.filter(item => 
        item?.item && typeof item.item === 'string' && item.item.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filterResults);
}, [items, search]);
  
    const addItem = async (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      console.log(`New item ID: ${id}`); // Logging the new ID
      const addNewItem = {id, checked:false, item}
      try{
        const response = await api.post('/Api/todos',addNewItem);
        console.log("Response:", response); // Check the actual structure
        if (response.data) {
           // Make sure 'items' is an array before spreading
          const listItems = Array.isArray(items) ? [...items, response.data] : [response.data];
          setItems(listItems); // Update the state with the new list of items
      } else {
          throw new Error("Invalid response: No data in response");
      }

      } catch (err) {
        console.log(`Error: ${err.message}`);
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }
    }
   
      const handleCheck = async (id) => {
        const myItem = items.find(item => item.id === id);
        
        if (!myItem) return; // Handle the case where the item isn't found
    
        // Create a new object with the updated checked value
        const updatedItem = { ...myItem, checked: !myItem.checked };

        // Log the current state before toggling
        console.log(`Before Toggle: Item ID: ${id}, Checked: ${myItem.checked}`);
    
        try {
            const response = await api.put(`/Api/todos/${id}`, updatedItem);
    
            if (response.data) {
                // Update state with the newly checked or unchecked item
                const updatedItems = items.map(item => 
                    item.id === id ? { ...item, checked: !item.checked } : item
                );
                setItems(updatedItems); // Update state with the new list
            }
            // Log the new state after toggling
            console.log(`After Toggle: Item ID: ${id}, Checked: ${response.data.checked}`);
        } catch (error) {
            console.error("Error updating item:", error.message);
        }
    };
  
    const handleDelete = async (id) => {
      console.log(`Handling delete for ID: ${id}`);
      
      try {
  /*       const reqUrl = `${API_URL}/${id}`;
        console.log("DELETE request URL:", reqUrl); */
        await api.delete(`/Api/todos/${id}`)
    
          const updatedItems = items.filter(item => item.id !== id);
          setItems(updatedItems);
      } catch (error) {
        console.error("Error deleting item:", error.message);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
    }
  
    const focusInput = () => {
      if(inputRef.current){
        inputRef.current.focus();
    }
  }
    return(
        <dataContext.Provider value={{
            items, handleCheck, handleDelete,focusInput,inputRef,search,setSearch,newItem, setNewItem, handleSubmit,searchResults, setSearchResults,fetchError,isLoading,width
        }}>
            {children}
        </dataContext.Provider>
    )
    
}

export default dataContext
