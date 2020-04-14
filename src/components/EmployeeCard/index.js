import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div> */}
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Year:</strong> {props.department}
          </li>
          <li>
            <strong>Position:</strong> {props.role}
          </li>
          <li>
            <strong>School:</strong> {props.location}
          </li>
        </ul>
      </div>
      {/* <span className="remove" onClick={() => props.handleRemoveFriend(props.id)}>𝘅</span> */}
    </div>
  );
}

export default EmployeeCard;
