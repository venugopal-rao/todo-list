import react from 'react'
import PropTypes from 'proptypes'

const Todo = ({ onClick, completed, text}) => (
  <li
    onClick = {onClick}
    style={{
        textDecoration: completed ? 'line-through':'none'
    }}
  >
    {text}
  </li>
  )

