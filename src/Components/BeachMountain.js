import React from 'react'
import Photo from './Photo'

function BeachMountain(props){
  return  <div class="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post}/>)}
          </div>
}

export default BeachMountain
