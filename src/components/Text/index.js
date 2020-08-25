import PropTypes from 'prop-types'
import React from 'react'

const Text = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <h3 className={ className }>
      { children }
    </h3>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  className: '',
}

export default Text
