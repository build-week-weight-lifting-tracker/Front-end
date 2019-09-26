import React, {useState, useEffect} from 'react';
import UserTable from './UserTable.js';
import AddUserForm from './AddUserForm.js';
import EditUserForm from './EditUserForm.js';

export default function UserWorkout(props) {

  // Dummy Data
  const usersData = [
    { id: 1, name: 'Pull Up', lifted: '0', sets: '3', reps: '10' },
    { id: 2, name: 'Bench Press', lifted: '225', sets: '3', reps: '10' },
    { id: 3, name: 'Squat', lifted: '405', sets: '3', reps: '10' },
  ];

  const initialFormState = { id: null, name: '', lifted: '', sets: '', reps: '' };

  // Set State
  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(initialFormState);

  // Crud Operation
  const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, lifted: user.lifted, sets: user.sets, reps: user.reps })
	}

  return (
    <div className="container">
      <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div className='workoutform'>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add Exercise</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>View Exercises</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}
