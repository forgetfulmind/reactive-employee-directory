import React from "react";
import Card from "../Card";
import "./style.css";

function Table(props) {
  return (
    <tbody className='tableBody'>
     
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
      <Card data={props.data}/>
    </tbody>
  );
}

export default Table;
