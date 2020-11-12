import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

function Photo(props) {
  const post = props.post
  return  <figure className="figure">
            <img className="photo" src={post.imageSrc} alt={post.description}/>
            <figcaption>
              <p>{post.description}</p>
            </figcaption>
            <div className="button-container">
              <button className="remove-button" onClick={() =>{
                props.onRemovePhoto(post)
              }}>Remove</button>
            </div>
          </figure>
}

Photo.PropTypes = {
  posts: PropTypes.object.isRequired
  onRemovePhoto: PropTypes.funch.isRequired
}

export default Photo
