import React, {Component} from 'react'

class List extends Component {
	render() {
		return (
			<ol>
				{ this.props.todo.map((todo, index) => <li key = {index}> {todo} </li>)}
			</ol>
		)
	}
}

export default List
