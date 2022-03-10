import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email
      }),
    }).then(res => {
      console.log(res)
      return res.json();
    }).then(json => {
      console.log(json);
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)} />
      <input type='password' placeholder='password' value={password} onChange={({ target }) => setPassword(target.value)} />
      <input type='email' placeholder='Email' value={email} onChange={({ target }) => setEmail(target.value)} />
      <button>Enviar</button>
    </form>
  )
}

export default UserPost