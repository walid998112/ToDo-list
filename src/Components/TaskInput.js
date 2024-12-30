import React, { useState } from "react";
import "../App.css"


function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  };

  return (
    <div style={{ display : 'flex', justifyContent:'space-around', alignItems:'center' }}>
    <form onSubmit={handleSubmit} style={{ display : 'flex', justifyContent:'space-around', alignItems:'center',     width: '568px' }}>
      <input className="input"
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "20px", width: "400px", marginRight: "10px" }}
      />
      {/* <img src="/addButton.png" alt="Not Found" onClick={(e)=>handleSubmit(e)}/> */}
      <button className="add" type="submit" style={{ padding: "10px 20px" , width:"100px",}}>
      <img className="addImage"src="/addButton.png" alt="Not Found" style={{width: "30px" }}/>      </button>
    </form>
    </div>
  );
}

export default TaskInput;
