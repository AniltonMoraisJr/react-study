import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';
import {usersJSON} from './data';
import _ from 'lodash';
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: "",
      users: usersJSON,
    }

    this.handleClickPoints = this.handleClickPoints.bind(this);
    this.handleClickAge = this.handleClickAge.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickRank = this.handleClickRank.bind(this);
  }

  handleClickAge = () => {
    let newUsers = _.orderBy(this.state.users, "age", "asc");
    this.setState({
      sortBy: "age", 
      users: newUsers
    });
  }

  handleClickName = () => {
    let newUsers = _.orderBy(this.state.users, "name", "asc");
    this.setState({
      sortBy: "name", 
      users: newUsers
    });
  }

  handleClickPoints = () => {
    let newUsers = _.orderBy(this.state.users, "points", "asc");
    this.setState({
      sortBy: "points", 
      users: newUsers
    });
  }

  handleClickRank = () => {
    let newUsers = _.orderBy(this.state.users, "rank", "asc");
    this.setState({
      sortBy: "rank", 
      users: newUsers
    });
  }

  render() {
    const  u  = this.state.users;
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age buttonClick={this.handleClickAge}></Age>
          <Name buttonClick={this.handleClickName}></Name>
          <Points buttonClick={this.handleClickPoints}></Points>
          <Rank buttonClick={this.han}></Rank>
          <Table data={u}></Table>
        </div>
      </div>
    );
  }
}

