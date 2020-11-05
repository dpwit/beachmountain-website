import React, {Component} from 'react'
import Photo from './Photo'

class BeachMountain extends Component {
  render(){
    return  <div class="photo-grid">
              {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
            </div>

  }
}

export default BeachMountain
