import React from 'react'
import dallaCorte from '../../../img/5-uai-945x340.png'
import beanGreen from '../../../img/bean-green-ok-uai-945x340.png'
import cinoart from '../../../img/cinoart-uai-1032x372.png'
import markIbar from '../../../img/1-uai-480x173.png'

const Sponsors = () => {
  return (
    <div className='box-sponsor'>
      <img src={dallaCorte} alt="1" />
      <img src={markIbar} alt="2" />
      <img src={cinoart} alt="3" />
      <img src={beanGreen} alt="4" />
    </div>
  )
}

export default Sponsors