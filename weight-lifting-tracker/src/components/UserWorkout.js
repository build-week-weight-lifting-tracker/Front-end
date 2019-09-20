import React from 'react';

function UserTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name data</td>
          <td>Username data</td>
          <td>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default function UserWorkout(props) {
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}
