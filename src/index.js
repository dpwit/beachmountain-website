import React from 'react';
import ReactDom from 'react-dom';

//const element = React.createElement('h1', null, 'Beach Mountain');

const todo = ['Create to do list', 'Save work', 'Commit to Github'];

const element = 
	<div>
		<h1>To Do List</h1>
		<ol> 
			{ todo.map((todo, index) => <li key = {index}> {todo} </li>)}
		</ol>
	</div>
//ReactDom.render (element, document.getElementById('root'));

ReactDom.render (element, document.getElementById('root'));