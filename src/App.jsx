import { useRef, useState } from "react";

function App(){
const input = useRef()
const [todo , setTodo] = useState([])

const addTodo = (event) => {
    event.preventDefault()
    console.log(input.current.value)
    todo.push(input.current.value)
    setTodo([...todo])
    console.log(todo)
    input.current.value = ""
}
const deleteTodo = (index)=>{
    console.log('todo delete' , index)
    todo.splice(index , 1);
    setTodo([...todo])
}
const editTodo = (index)=> {
    console.log('edit' , index)
    let editValue = prompt('Replace It')
    todo.splice(index , 1 , editValue)
    setTodo([...todo])
}

    return(
        <>
        <h1>Todo App</h1>
        <form onSubmit={addTodo}>
            <input type="text" placeholder="Enter Task" ref={input} size={50} />
            <button className="add" type="submit">Add Todo</button>
        </form>
        <div>
        <ol>
         {todo.length > 0 ? todo.map((item , index) => {
          return <li key={index}>{item}
          <button className="delete" onClick={()=> deleteTodo(index)}>Delete</button>
          <button className="edit" onClick={()=> editTodo(index)}>Edit</button><hr />
          </li>
        }) : <h1>No item found...</h1>}
       </ol>
        </div>
        </>
    )
}
export default App