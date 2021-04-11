import React from "react";
import Card from "../Card";
import "./style.css";

function Table(props) {
  return (
    <table>
    <tbody className='tableBody'>
      <tr>
        <th ></th>
        <th>Name <img className="carrot" data-value="name" onClick={props.handleBtnClick} src="/carrot.png" alt="nav carrot"></img></th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
      <Card data={props.data}/>
    </tbody>
    </table>
  );
}

export default Table;
