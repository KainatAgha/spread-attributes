import React from 'react';
import './Field.css';

function Field(props){
     return (
    <div className="input-field">
      <ul>
      <li><label>Department: </label>
      <text>{props.department}</text></li>
      <li><label>Name of Student: </label>
      <text>{props.name}</text></li>
      <li><label>Registration No.: </label>
      <text>{props.reg}</text></li>
      <li><label>Project: </label>
      <text>{props.project}</text></li>
      </ul>
    </div>
  );
}
export default Field;