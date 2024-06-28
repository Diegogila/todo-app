import { useState } from "react";


function useLocalStorage(storageName, initialValue){
  
    const localStorageItem = localStorage.getItem(storageName)
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(storageName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setItem] = useState(parsedItem);
  
    //Save and update todos
    const saveItem = (newItem) => {
      console.log(JSON.stringify(newItem))
      localStorage.setItem(storageName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item,saveItem]
  }

  
  export {useLocalStorage}