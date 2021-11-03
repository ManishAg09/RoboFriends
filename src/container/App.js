import React, {useState, useEffect} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Errorboundary from '../components/Errorboundary';


function App() {

	const [robots, setRobots] = useState([])
	const [searchfields, setSearchfield] = useState('')

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
		
	}

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
			return response.json();
		})
		.then(users =>{
			setRobots(users);
		})
	},[])


	const filtered = robots.filter(robot => {
		return (
			robot.name.toLowerCase().includes(searchfields.toLowerCase())||
			robot.email.toLowerCase().includes(searchfields.toLowerCase())
			)
	})
	return (robots.length === 0)?
		<h3 className='tc'>Loading...</h3> :
		(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<Errorboundary>
						<Cardlist robots= {filtered}/>
					</Errorboundary>
				</Scroll>
			</div>
		)
		
	}
	

export default App;




