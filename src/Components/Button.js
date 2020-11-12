import React from 'react';

function Button (props) {
  if (props.btnType === "primary") {
  	return (
  		<button onClick={() => {props.props.onRemovePhoto(props.props.post)}}>Remove {props.props.post.description}</button>
    )
  } else if (props.btnType === "secondary"){
    return (
      <button>Add new</button>
    )
  }
}

export default Button
