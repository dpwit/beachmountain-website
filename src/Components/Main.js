import React, {Component} from 'react'
import List from './List'
import Title from './Title'

class Main extends Component {
	render() {
		return	<div>
							<Title title = {['DPW To do list']}/>
							<List todo = {['Do the work', 'Check the work']}/>
							<List todo = {['Save work', 'Commit to GitHub']}/>
						</div>

	}
}

export default Main
