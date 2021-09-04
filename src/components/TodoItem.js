import React from 'react'
 
function TodoItem(props){

    const checkedStyle = {
        fontStyle: "italic",
        color: "#FF0000",
        textDecoration: "line-through"
    }

   return (
       <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.completed} 
             onChange={() => props.checkChange(props.id)}
            />
            <p style={props.completed ? checkedStyle : null}>{props.text}</p>
       </div>
   ) 
}


export default TodoItem


