import React from 'react'
import Photo from './Photo'

function BeachMountain(props){
  return  <div className="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
          </div>
}

export default BeachMountain
