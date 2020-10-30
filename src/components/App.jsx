import React, { useState } from "react";
import ToDoItem from './ToDoItem'

function App() {


  const [text, setText] = useState("");
  const [listArray, setListArray] = useState([])



  const handleChange = (event) => {
    const updatedText = event.target.value;
    setText(updatedText)
  }


  const addItem = () => {
    //push the new todo item to the array
    setListArray((prev) => {
      return [...listArray, text]
    })
    //clear the input 
    setText("")
  }

  const deleteItem = (id) => {
    //delete the todo item to the array
    setListArray(prev => {
      return prev.filter((item, index) => {
        return index !== id
      })
    })
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArray.map((item, index) => {
            return <ToDoItem
              id={index}
              key={index}
              item={item}
              onChecked={deleteItem}
            />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
