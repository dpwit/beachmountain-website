import React from 'react';
import ReactDom from 'react-dom';

//const element = React.createElement('h1', null, 'Beach Mountain');

const todo = ['Create to do list', 'Save work', 'Commit to Github'];

const element = React.createElement('ol', null, 
	todo.map((todo, index) => React.createElement('li', {key: index}, todo))
	);

//ReactDom.render (element, document.getElementById('root'));

ReactDom.render (element, document.getElementById('root'));