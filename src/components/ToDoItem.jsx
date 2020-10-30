import React, { useState } from 'react'

const ToDoItem = (props) => {
  // const [isCompleted, setIsCompleted] = useState(false)


  const toggleCompleted = () => {
    // isCompleted ? setIsCompleted(false) : setIsCompleted(true)
    // setIsCompleted(prevValue => {
    //   return !prevValue
    // })
  }

  return (
    // <li onClick={toggleCompleted} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
    <li onClick={() => { props.onChecked(props.id) }}>
      {props.item}
    </li>
  )
}


export default ToDoItem;
