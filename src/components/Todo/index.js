import React, {useState} from 'react';

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
            id: todos[todos.length - 1].id + 1 || 1,
            title: value
        }
        setTodos([...todos, newTodo])
    }
    return (
        <div className='row my-5'>
            <div className="col-md-4 offset-md-4">
                <div className="d-flex mb-4">
                    <input type="text" className='form-control me-2' onChange={handleInput}/>
                    <button className="btn btn-primary" onClick={addTodo} disabled={!value.trim()}>Добавить</button>
                </div>
                <ul className='list-group'>
                    {
                        todos.map(item =>
                            <li key={item.id} className='list-group-item'>
                                {item.title}
                                <div>
                                    <button type='button'>Edit</button>
                                    <button type='button'>Delete</button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todo;