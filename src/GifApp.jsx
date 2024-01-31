import { useState } from "react"
import AddCategory from "./components/AddCategory"
import ListGifs from "./components/ListGifs"


const GifApp = () => {
  const [categories, setCategories] = useState([""])

  const onAddCategory = (inputValue) => {
    if (categories.includes(inputValue)) return;

    setCategories([...categories, inputValue])
  }

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onAddCategory={onAddCategory} /> 

        {
          categories.map((category) => (
              <ListGifs key={category} category={category} />
            ))
        }

    </>
  )

}

// qjQq2hLTuFZidNrqmgbMUUg27bsJEwAr

export default GifApp