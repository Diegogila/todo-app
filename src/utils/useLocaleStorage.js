import { useEffect, useState } from "react";

function useLocalStorage(storageName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  
  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(storageName);
      let parsedItem;
  
      if (!localStorageItem) {
        localStorage.setItem(storageName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem)
      }
  
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true);
    }
  },[]);

  //Save and update todos
  const saveItem = (newItem) => {
    localStorage.setItem(storageName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}

export { useLocalStorage };
