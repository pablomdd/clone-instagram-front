import React from "react";

function Card(props) {
  return (
    <div className="card mb-3 mt-3">
      <div className="card-header d-flex">
        <img
          className="card-profile-pic  w-25"
          src={props.profile_pic}
          alt="profile pic"
        />
        <h6 className="card-title m-2">pablomdd</h6>
      </div>
      <img className="post-image" src={props.media} alt="post image" />
      <div className="card-body">
        <div className="row px-2">
          <h5 className="card-title">{props.username}</h5>
        </div>
        <div className="row px-2">
          <p className="card-text">{props.description}</p>
        </div>
        <div className="row px-2">
          <p className="card-text">
            <small className="text-muted">Posted {props.date}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
