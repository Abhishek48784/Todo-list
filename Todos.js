import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    let myStyle = {
        minHeight: "40vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? <img src="https://wallpaperaccess.com/full/1489353.jpg" alt="pen over noebook" /> :
                props.todos.map((todo) => {
                    return (
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    );
}