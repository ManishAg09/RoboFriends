import React, {Component} from 'react';

class Errorboundary extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			hasError: false
		}
	}

	render()
	{
		if(this.state.hasError)
		{
			return <h1>Oooops there is an error</h1>
		}
		return this.props.children
	}
}

export default Errorboundary;