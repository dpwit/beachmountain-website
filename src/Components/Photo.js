import React from 'react'
import Button from './Button'

function Photo(props) {
  console.log(props);
  const post = props.post
  return  <figure className="figure">
            <img className="photo" src={post.imageSrc} alt={post.description}/>
            <figcaption>
              <p>{post.description}</p>
            </figcaption>
            <div className="button-container">
            <Button className="remove-button" btnType="primary" props={props}/>
            </div>
          </figure>
}

export default Photo
