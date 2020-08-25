import PropTypes from 'prop-types'
import React from 'react'

const Subtitle = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <h2 className={ className }>
      { children }
    </h2>
  )
}

Subtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Subtitle.defaultProps = {
  className: '',
}

export default Subtitle
