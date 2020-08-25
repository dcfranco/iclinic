import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const Image = (props) => {
  const {
    className,
    alt,
    src,
  } = props

  return (
    <div className={ classNames('Image', className) }>
      <img draggable={false} src={src} alt={alt} loading='lazy' />
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

Image.defaultProps = {
  className: '',
}

export default Image
