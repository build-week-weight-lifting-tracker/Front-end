import React from 'react';

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Exercise Name</th>
        <th>Amount Lifted</th>
        <th>Sets</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lifted}lbs</td>
            <td>{user.sets} x {user.reps}</td>
            <td>
              <button onClick={() => {props.editRow(user)}} className="button muted-button">Edit</button>
              <button onClick={() => props.deleteUser(user.id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;
