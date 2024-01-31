import { useState } from "react";

const AddCategory = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState("")

  const onChageValue = ({target}) => {
    setInputValue(target.value)
    
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim())
    setInputValue("")
  }

  


  return (
      <form onSubmit={onSubmitForm}>
        <input 
      type="text" 
      placeholder="Ingrese el Gif" 
      value={inputValue}
      onChange={onChageValue}
      />
      </form>
      
    
  );
};

export default AddCategory;
