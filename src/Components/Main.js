import React, {Component} from 'react'
import Title from './Title'
import BeachMountain from './BeachMountain'

const posts = [{
	id: "0",
 	description: "beautiful landscape",
 	imageSrc: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
 	"3919321_1443393332_n.jpg"
 }, {
 	id: "1",
 	description: "beach mountain",
 	imageSrc: "/src/images/Beach-Mountain-logo-blue.png"
 }, {
 	id: "2",
 	description: "On a vacation!",
 	imageSrc: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
}, {
 id: "3",
 description: "DPW IT logo",
 imageSrc: "http://dpwit.co.uk/wp-content/uploads/2016/03/cropped-cropped-DPW_Skull_Logo_Mask.jpg"
}]

class Main extends Component {
	render() {
		return	<div>
							<Title title = {['beach mountain']}/>
							<BeachMountain posts={posts}/>
						</div>

	}
}

export default Main
