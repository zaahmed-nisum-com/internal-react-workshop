import React, { Component } from "react";

class Users extends Component {
  constructor() {
    this.state = {
      users: [],
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate() {}

  shouldComponentUpdate() {}

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>IS-ACTIVE</td>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((itm, indx) => {
              return (
                <tr>
                  <td>{itm.id}</td>
                  <td>{itm.name}</td>
                  <td>{itm.isActive ? "ACTIVE" : "NO ACTIVE"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
