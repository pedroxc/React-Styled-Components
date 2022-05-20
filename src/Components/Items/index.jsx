import React from 'react';
import { Items } from './styled';
import Item from '../Item';
import ImageFilter from '../ImageFilter';

export default (props)=> {
  return <Items>
    {ImageFilter(props.type)}
    <Item {...props}></Item>
    <span>{props.date}</span>
  </Items>
}
