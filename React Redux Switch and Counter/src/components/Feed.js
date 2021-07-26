import React from 'react';
import LightSwitch from './LightSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

export default function Feed() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{myState}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <LightSwitch />
    </div>
  )
}