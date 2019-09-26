import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  };

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Amount Lifted (lbs)</label>
      <input type="text" name="lifted" value={user.lifted} onChange={handleInputChange} />
      <label>Sets</label>
      <input type="text" name="sets" value={user.sets} onChange={handleInputChange} />
      <label>Reps</label>
      <input type="text" name="reps" value={user.reps} onChange={handleInputChange} />
      <button>Update Exercise</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm;
