import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function BeachMountain(props){
  return  <div className="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
          </div>
}

BeachMountain.PropTypes = {
  posts: PropTypes.array.isRequired
  onRemovePhoto: PropTypes.funch.isRequired
}

export default BeachMountain
