import React from 'react';

/* export default function  Form() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  console.log(username)
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
} */

export default function  Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} value={username} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" onChange={handleInputChange} value={password} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}