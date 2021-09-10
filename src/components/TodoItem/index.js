import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({item, deleteTodo}) => {
    const [isEdit, setIsEdit] = useState(false)
    const handleEdit = () => {
        setIsEdit(true)
    }

    return (
        <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
            {
                isEdit ? <input type="text" className='form-control'value={item.title} /> :
                    <span>{item.title}</span>
            }
            <div className='d-flex'>
                <button type='button' className='btn btn-outline-warning me-2 '
                        onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
                <button type='button' className='btn btn-outline-danger' onClick={() => deleteTodo(item.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </li>

    );
};

export default TodoItem;