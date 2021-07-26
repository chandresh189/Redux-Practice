import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../actions';
import '../App.css';

export default function LightSwitch() {
    const state = useSelector((state) => state.lightSwitchReducer)
    const dispatch = useDispatch();
    const bgColor = state === 'on' ? 'white' : 'black';
    const textColor = state === 'on' ? 'black' : 'white';  
   console.log(state);
    return (  
      <div className="light" style={{background : bgColor, color: textColor}}>
        <button onClick={() => dispatch(toggle())}>
          {state}
        </button>
      </div>
    )
}