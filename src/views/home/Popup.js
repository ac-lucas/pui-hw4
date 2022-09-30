import React, { Component } from 'react';
import { useState, useEffect } from 'react';

// referenced from https://stackoverflow.com/questions/65214950/how-to-disappear-alert-after-5-seconds-in-react-js

export function Popup(props) {
    const [show, setShow] = useState(true)
  
    useEffect(() => {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false)
      }, 3000)
  
      return () => {
        clearTimeout(timeId)
      }
    });
  
    if (!show) {
      return null;
    }
  
    return (
      <div className='popup'>
        <p>Added to cart: </p>
        <br></br>
        <b>{props.itemName}</b>
        <p>{props.itemGlazing} glazing</p>
        <p>Pack of {props.itemPackSize}</p>
        <p>Price: ${props.itemPrice}</p>
      </div>
    )
  }