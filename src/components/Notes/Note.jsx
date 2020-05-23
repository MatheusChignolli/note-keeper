import React from 'react';
import './styles.css';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Note(props) {
  return <div className={"note-parent"}>
    <div className="note">
      <h1>{props.h1} <span onClick={() => props.deleteItem(props.id)}><DeleteIcon/></span></h1>
      <p>{props.content}</p>
    </div>
  </div>
}