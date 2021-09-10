import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import {nanoid} from 'nanoid'
import TodoItem from "../TodoItem";
import TodoHeader from "../TodoHeader";

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Выпить весь чай'
        },
        {
            id: 2,
            title: 'Собраться на работу'
        }
    ])
    const [value, setValue] = useState('')
    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const addTodo = () => {
        const newTodo = {
            id: nanoid(),    //todos[todos.length] ?todos[todos.length - 1].id +1  : 1
            title: value
        }
        setTodos([...todos, newTodo])
        setValue('')
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    const saveTodo = (id, title) => {
        setTodos(todos.map(item => item.id === id ? {...item , title} : item ))
    }

    return (
        <div className='row my-5'>
            <div className="col-md-4 offset-md-4">
                <TodoHeader value={value} handleInput={handleInput} addTodo={addTodo} length={todos.length}/>
                <button type='button' className='btn btn-danger mt-3 w-100' onClick={()=> setTodos([])}>Clear all</button>
                <ul className='list-group'>
                    {
                        todos.map(item =>
                            <TodoItem item={item}  deleteTodo={deleteTodo} saveTodo={saveTodo}/>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todo;