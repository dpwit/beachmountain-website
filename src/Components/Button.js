import React from 'react';

function Button (props) {
  if (props.btnType === "primary") {
  	return (
  		<button className="remove-button" onClick={() => {props.props.onRemovePhoto(props.props.post)}}>Remove {props.props.post.description}</button>
    )
  } else if (props.btnType === "secondary"){
    return (
      <button className="add-button">Add new</button>
    )
  }
}

export default Button

// put these if else statements as methods - cleaner
