import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Errorboundary from '../components/Errorboundary';


class App extends React.Component{
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfields: ''
		}
	}
	

	onSearchChange = (event) => {
		this.setState({ searchfields: event.target.value})
		
	}


	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
			return response.json();
		})
		.then(users =>{
			this.setState({ robots: users });
		})
	}



	render(){

		const filtered = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfields.toLowerCase())
		})
		return (this.state.robots.length === 0)?
			<h3 className='tc'>Loading...</h3> :
			(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<Errorboundary>
						<Cardlist robots= {filtered}/>
					</Errorboundary>
				</Scroll>
			</div>
			)
		
	}
	
}

export default App;




