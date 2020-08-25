import PropTypes from 'prop-types'
import React from 'react'

const Button = (props) => {
  const {
    type,
    className,
    disabled,
    children,
    isLoading,
    onClick,
  } = props

  return (
    <button
      type={ type }
      disabled={ disabled || isLoading }
      className={ className }
      onClick={ onClick }
    >
      { isLoading ? (
        <i className='spinner' />
        ) : children }
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  type: 'submit',
  disabled: false,
  isLoading: false,
  className: '',
  onClick: () => {},
}

export default Button
