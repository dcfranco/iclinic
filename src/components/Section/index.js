import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <section className={ classNames('Page', className) }>
      { children }
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  className: '',
}

export default Section
