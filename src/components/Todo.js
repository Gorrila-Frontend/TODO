import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

const Todo = ({  onClick,onSubmit, completed, text }) => (
  <ListGroupItem
    color="info"
    style={{

      opacity: completed ? '0.2' : '1'
    }}
  >
    <p
      style={{

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
      onClick={onSubmit}

    >
      Delete
    </button>
    </div>
  </ListGroupItem>
)



Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
