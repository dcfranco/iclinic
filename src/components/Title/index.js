import PropTypes from 'prop-types'
import React from 'react'

const Title = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <h1 className={ className }>
      { children }
    </h1>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Title.defaultProps = {
  className: '',
}

export default Title
