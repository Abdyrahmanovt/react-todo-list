import React, {useState} from 'react';
import {nanoid} from 'nanoid'
import TodoItem from "../TodoItem";
import TodoHeader from "../TodoHeader";

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Выпить весь чай',createdAt:1631425895683
        },
        {
            id: 2,
            title: 'Собраться на работу',createdAt:1630907495683
        },
        {
           id:3,
           title:'Ничего не делать',createdAt:1630648295683
        }
    ])
    const [filtered,setFiltered] = useState(todos)
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

    const saveTodo = (id, title) =>     {
        setTodos(todos.map(item => item.id === id ? {...item , title} : item ))
    }


    const filterByDate = (type)=>{
        const times = {
            day: 24 * 60 * 60 * 1000,
            week: 24 * 60 * 60 * 1000 * 7,
            month: 24 * 60 * 60 * 1000 * 30,
            all: +new Date()
        }
        setFiltered(todos.filter(item => +new Date() - item.createdAt < times[type]))
    }

    return (
        <div className='row my-5 '>
            <div className="col-md-4 offset-md-4">
                <TodoHeader value={value} handleInput={handleInput} addTodo={addTodo} length={todos.length} filterByDate={filterByDate}/>
                <button type='button' className='btn btn-danger mt-3 w-100' onClick={()=> setTodos([])}>Clear all</button>
                <ul className='list-group'>
                    {
                        filtered.map(item =>
                            <TodoItem item={item}  deleteTodo={deleteTodo} saveTodo={saveTodo} />
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todo;