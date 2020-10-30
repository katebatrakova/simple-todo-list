import React, { useState } from "react";
import ToDoItem from './ToDoItem'
import InputArea from './InputArea'

function App() {

  const [listArray, setListArray] = useState([])

  const addItem = (text) => {
    //push the new todo item to the array
    setListArray((prev) => {
      return [...listArray, text]
    })
    //clear the input 
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
      {/* input area  */}
      <InputArea
        onAdd={addItem}
      />
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
