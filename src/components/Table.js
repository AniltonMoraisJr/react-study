import React, {Component} from 'react';

const Rows = (props) => {
	return (
		<tr>
			<td>{props.data.age}</td>
			<td>{props.data.name}</td>
			<td>{props.data.points}</td>
			<td>{props.data.rank}</td>
		</tr>
	)
}
export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: props.data
		}
	}

	componentWillReceiveProps({data}) {
		this.setState({
			users: data
		});
	}

    // complete the comparators
	compareByAge(a, b) {
		
	}

	compareByName(a, b) {
		
	}

	compareByPoints(a, b) {
		
	}

	compareByRank(a, b) {
		
	}

	render() {
		let rows = this.state.users.map((v) =>{	
			return (<Rows data = {v}/>)
		});
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{
						rows
					}
				</tbody>
			</table>
		</div>)
	}
}


