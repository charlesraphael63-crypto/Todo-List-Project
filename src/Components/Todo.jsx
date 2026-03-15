import React, { useState } from 'react'
import "./Todo.css"
import Button from './Button'

const Todo = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])
    const [mom, setMom] = useState(false)
    console.log(todos)

    const addTodo = (e) => {
        e.preventDefault()
        if(!value.trim()) return
        setMom(true)
        setTodos([...todos, value])

        setValue("")
    }
    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };
    const editTodo = (index) => {
        setValue(todos[index]);
        deleteTodo(index);
    };
  return (
    <main className="mainTodo">
      <section className="menuTodo">
        <nav className="bodyTodo">
            <div className="topEdit">
                <input className="inputSty" type="text" placeholder="Enter your Task"
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={addTodo} className="btn" text="Add"/>                
            </div>
            <article className="mainLi">
                {
                    mom ? (
                        todos.map((item, index) => (
                        <ul className="menuLi" key={index}>
                            <li className="list">{item}</li>
                            <section className="mainWrap">
                                <button className="editBtn" onClick={() => editTodo(index)}>
                                <img className="imgSide1" src="https://img.icons8.com/?size=48&id=7LhMaNDFgoYK&format=png" alt="edit" />
                                </button>
                                <button className="delectBtn" onClick={() => deleteTodo(index)}>
                                <img className="imgSide" src="https://img.icons8.com/?size=50&id=11767&format=png" alt="delete" />
                                </button>
                            </section>
                        </ul>
                        ))
                     ) : <p className="menuLi">No Task yet</p>
                } 
            </article> 
        </nav>
      </section>
    </main>
  )
}

export default Todo

