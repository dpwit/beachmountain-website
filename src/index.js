import React, {Component} from 'react';
import ReactDom from 'react-dom';

class List extends Component {
	render() {
		return (
			<ol>
				{ this.props.todo.map((todo, index) => <li key = {index}> {todo} </li>)}
			</ol>
		)
	}
}

class Title extends Component {
	render() {
		return (
			<h1>{ this.props.title}</h1>
			)
	}
}

class Main extends Component {
	render() {
		return	<div>
							<Title title = {['DPW To do list']}/>
							<List todo = {['Do the work', 'Check the work']}/>
							<List todo = {['Save work', 'Commit to GitHub']}/>
						</div>

	}
}

ReactDom.render(<Main/>, document.getElementById('root'));
