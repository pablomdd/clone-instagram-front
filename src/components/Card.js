import React from "react";

function Card(props) {
  return (
    <div className="card mb-3 mt-3">
      <div className="card-header d-flex">
        <img
          className="card-profile-pic  w-25"
          src="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
          alt="profile pic"
        />
        <h6 className="card-title m-2">pablomdd</h6>
      </div>
      <img
        className="post-image"
        src="https://newsweekespanol.com/wp-content/uploads/2018/05/maxresdefault.jpg"
        alt="post image"
      />
      <div className="card-body">
        <div className="row px-2">
          <h5 className="card-title">pablomdd</h5>
        </div>
        <div className="row px-2">
          <p className="card-text">Maravillosa vista de la cdmx 😍😍😍.</p>
        </div>
        <div className="row px-2">
          <p className="card-text">
            <small className="text-muted">Posted 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
