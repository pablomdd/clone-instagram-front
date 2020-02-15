import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const PostItem = props => {
  return (
    <div className="gallery-item" tabindex="0">
      <img src={props.src} className="gallery-image" alt="" />

      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes">
            <span className="visually-hidden">Likes:</span>
            {/* <i className="fas fa-heart" aria-hidden="true"></i> */}
            <FontAwesomeIcon className="" icon={faHeart} size="1x" />{" "}
            {props.likes}
          </li>
          <li className="gallery-item-comments">
            <span className="visually-hidden">Comments:</span>
            {/* <i className="fas fa-comment" aria-hidden="true"></i>{" "} */}
            <FontAwesomeIcon icon={faComment} size="1x" /> {props.comments}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostItem;
