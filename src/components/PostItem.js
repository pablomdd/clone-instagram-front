 import React from 'react'

const PostItem = (props) => {
    return (
        <div class="gallery-item" tabindex="0">
            <img
              src={props.url_source}
              class="gallery-image"
              alt=""
            />

            <div class="gallery-item-info">
              <ul>
                <li class="gallery-item-likes">
                  <span class="visually-hidden">Likes:</span>
                  <i class="fas fa-heart" aria-hidden="true"></i> {props.likes}
                </li>
                <li class="gallery-item-comments">
                  <span class="visually-hidden">Comments:</span>
                  <i class="fas fa-comment" aria-hidden="true"></i> {props.comments}
                </li>
              </ul>
            </div>
          </div>
    )
}

export default PostItem
