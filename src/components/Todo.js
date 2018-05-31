import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li
    style={{
      background: completed ? '#222' : 'cornsilk'
    }}
  >
    <p
      style={{
      color: completed ? '#ccc' : '#000',
      textDecoration: completed ? 'line-through' : 'none',
      }}
    >{text}</p>
    <div
      className="flex--button"
    >
    <button
      onClick={onClick}
      className="btn btn-outline-success"
    >
      Ok  
    </button>    
    <button
      className="btn btn-outline-danger"
    >
      Delete  
    </button>    
    </div>
  </li>
)
  


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
