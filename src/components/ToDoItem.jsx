import React, { useState } from 'react'

const ToDoItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(false)


  const toggleCompleted = () => {

    isCompleted ? setIsCompleted(false) : setIsCompleted(true)

  }

  return (
    <li onClick={toggleCompleted} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {props.item}
    </li>
  )
}


export default ToDoItem;
