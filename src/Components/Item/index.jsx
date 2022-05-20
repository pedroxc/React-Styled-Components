import React from 'react'

import {Item} from './styled'

export default ({type,from,value})=>{
  return (
  <Item>
    <span className='text'>
      {type}
    </span>
    <span>
      {from}
    </span>
    <span>
      {value}
    </span>
  </Item>)
}

