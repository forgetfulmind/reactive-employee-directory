// import React from "react";
import "./style.css";

function Card(props) {
console.log(props.data)
// let card = []
//  card = props.data.map(element =>{

  return (
    props.data.map(element =>{
      return (
      <tr key={element.login.uuid}>
        <td><img src={element.picture.thumbnail} alt="the face"></img></td>
        <td>{element.name.first} {element.name.last}</td>
        <td>{element.phone}</td>
        <td>{element.email}</td>
        <td>{element.dob.date.split('T')[0]}</td>
      </tr>
    )
    }
  ))
  }

// return card
// }

export default Card;
