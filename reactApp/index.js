//Imports
import React from 'react';
let ReactDOM = require('react-dom');

// Dummy data
const dummyData = ['Update Resume', 'Finish Portfolio', 'Get Job'];

//Components

//Todo List
class TodoList extends React.Component {
	
	render() {
		return (
			<ul>{dummyData.map((todo) => <Todo task={todo} />)}</ul>
		)
	}
}

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render(){
		return (<li><button onClick={}>X</button> {this.props.task}</li>);
	}
}


ReactDOM.render(<TodoList />, document.getElementById('root'));
								