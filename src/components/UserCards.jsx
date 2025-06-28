// import React from "react";
import "./UserCards.css";

const UserCards = (props) => {
  return (
    <div className="user-container">
      <p id="user-name">{props.Name}</p>
      <img id="user-img" src={props.image} alt="Rahul" />
      <p id="user-desc">Description of {props.Name}</p>
    </div>
  );
};

export default UserCards;
