import React from 'react';
import './styles.css';

export default function Note(props) {
  return <div className="note">
    <h1>{props.h1}</h1>
    <p>{props.content}</p>
  </div>
}