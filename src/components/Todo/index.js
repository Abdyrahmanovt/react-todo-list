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
    return (
        <div>

        </div>
    );
};

export default Todo;