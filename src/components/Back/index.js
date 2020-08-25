import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { ReactComponent as ArrowSvg} from '../../assets/images/arrow.svg'

const Back = () => {
  return (
    <Link
      to={routes.INDEX}
      className='page-back'
    >
      <ArrowSvg />
      <span>Voltar</span>
    </Link>
  )
}

export default Back
