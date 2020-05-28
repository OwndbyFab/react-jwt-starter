import React, { Component } from "react";

import UserService from "../services/user.service";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.extractRoles = this.extractRoles.bind(this);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    UserService.getAllUser()
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  extractRoles(roleArray) {
    let roleNames = [];
    roleArray.forEach((element) => {
      roleNames.push(element.name);
    });

    return roleNames.join(", ");
  }

  render() {
    const users = this.state.users;

    return (
      <div className="container">
        <header className="jumbotron">
          <h4>All User</h4>
        </header>

        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">roles</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.id}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{this.extractRoles(row.roles)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
