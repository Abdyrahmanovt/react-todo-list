import React from 'react';

const TodoHeader = ({value, addTodo,handleInput,length,filterByDate}) => {
    return (
      <div>
          <div className="d-flex align-items-center justify-content-between">
              <h1>TodoList</h1>
              <span>item: {length}</span>
          </div>
          <div className="d-flex align-items-center">
              <button type="button" className="btn btn-sm btn-secondary mb-2 me-2 " onClick={() => filterByDate("all")}>All</button>
              <button type="button" className="btn btn-sm btn-secondary mb-2 me-2 " onClick={() => filterByDate("day")} >day</button>
              <button type="button" className="btn btn-sm btn-secondary mb-2 me-2 " onClick={() => filterByDate("week")}>week</button>
              <button type="button" className="btn btn-sm btn-secondary mb-2" onClick={() => filterByDate("month")} >month</button>
          </div>
          <div className="d-flex mb-4">
              <input type="text" className='form-control me-2' value={value} onChange={handleInput}/>
              <button className="btn btn-primary" onClick={addTodo} disabled={!value.trim()}>Добавить</button>
          </div>
      </div>
    );
};

export default TodoHeader;