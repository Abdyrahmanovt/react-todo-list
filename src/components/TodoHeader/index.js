import React from 'react';

const TodoHeader = ({value, addTodo,handleInput,length}) => {
    return (
      <div>
          <div className="d-flex align-items-center justify-content-between">
              <h1>TodoList</h1>
              <span>item: {length}</span>
          </div>
          <div className="d-flex mb-4">
              <input type="text" className='form-control me-2' value={value} onChange={handleInput}/>
              <button className="btn btn-primary" onClick={addTodo} disabled={!value.trim()}>Добавить</button>
          </div>
      </div>
    );
};

export default TodoHeader;