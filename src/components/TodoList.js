import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import '../index.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

const TodoList = ({ props,todos, toggleTodo, deleteTodo }) => (
  <ListGroup className="ulList">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onSubmit={() => deleteTodo(todo.id)}

      />
    )}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;
