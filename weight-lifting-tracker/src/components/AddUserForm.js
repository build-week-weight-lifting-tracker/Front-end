import React, {useState} from 'react';

const AddUserForm = props => {

  const initialFormState = { id: null, name: '', lifted: '', sets: '', reps: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  return (
    <form onSubmit={event => {
      event.preventDefault();
      if (!user.name || !user.lifted || !user.sets || !user.reps) return;
      props.addUser(user)
      setUser(initialFormState)
    }}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Amount Lifted (lbs)</label>
      <input type="text" name="lifted" value={user.lifted} onChange={handleInputChange} />
      <label>Sets</label>
      <input type="text" name="sets" value={user.sets} onChange={handleInputChange} />
      <label>Reps</label>
      <input type="text" name="reps" value={user.reps} onChange={handleInputChange} />
      <button>Add Exercise</button>
    </form>
  )
}

export default AddUserForm;
