import React from 'react';
import ReactDom from 'react-dom';

//const element = React.createElement('h1', null, 'Beach Mountain');

const element = React.createElement('ol', null,
	React.createElement('li', null, 'Create to do list'),
	React.createElement('li', null, 'Save work'),
	React.createElement('li', null, 'Commit to GitHub'),
	);

//ReactDom.render (element, document.getElementById('root'));

ReactDom.render (element, document.getElementById('root'));