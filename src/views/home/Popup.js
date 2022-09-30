import React, { Component } from 'react';
import { useState, useEffect } from 'react';

export function Popup(props) {
    const [show, setShow] = useState(true)
  
    // On componentDidMount set the timer
    useEffect(() => {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false)
      }, 3000)
  
      return () => {
        clearTimeout(timeId)
      }
    }, []);
  
    // If show is false the component will return null and stop here
    if (!show) {
      return null;
    }
  
    // If show is true this will be returned
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