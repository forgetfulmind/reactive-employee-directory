import React from "react";
import Card from "../Card";
import "./style.css";
import carrot from '../../carrot.png'

function Table(props) {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
            <th>Image</th>
            <th>Name <img className="carrot" data-value="name" onClick={props.handleBtnClick} src={carrot} alt="nav carrot"></img></th>
            <th>Phone <img className="carrot" data-value="phone" onClick={props.handleBtnClick} src={carrot} alt="nav carrot"></img></th>
            <th>Email <img className="carrot" data-value="email" onClick={props.handleBtnClick} src={carrot} alt="nav carrot"></img></th>
            <th>DOB <img className="carrot" data-value="dob" onClick={props.handleBtnClick} src={carrot} alt="nav carrot"></img></th>
        </tr>
      </thead>
      <tbody>
            <Card data={props.data}/>
      </tbody>
    </table>
  );
}

export default Table;
