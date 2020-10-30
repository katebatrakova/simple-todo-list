import React, { useState } from 'react'

const InputArea = (props) => {
  const [text, setText] = useState("");


  const handleChange = (event) => {
    const updatedText = event.target.value;
    setText(updatedText)
  }



  return (
    <div className="form">
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={() => {
        props.onAdd(text)
        setText("")
      }}>
        <span>Add</span>
      </button>
    </div>
  )
}

export default InputArea;
