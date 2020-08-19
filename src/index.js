import React, {Component} from 'react';
import ReactDom from 'react-dom';

const todo = ['Create to do list', 'Save work', 'Commit to Github'];

class List extends Component {
	render() {
		return (
			<ol> 
				{ todo.map((todo, index) => <li key = {index}> {todo} </li>)}
			</ol>
			)
	}
}

class Title extends Component {
	render() {
		return (
			<h1>To Do List</h1>
			)
	}
}

class Main extends Component {
	render() {
		return (	
		<div>
			<Title/>
		<List/>
		</div>
		)
	}
}

ReactDom.render (<Main/>, document.getElementById('root'));
