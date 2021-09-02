
const Table = ({name, email, login, picture}) => {
    const fullName = `${name.first} ${name.last}`
  return (
  <>
    <table>
      <thead>
        <tr>
          <th scope='col'>Picture</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label='Picture'> <img src={picture?.medium} width='50' height='50' alt='user'/></td>
          <td data-label='Name'>{fullName}</td>
          <td data-label='Email'>{email}</td>
          <td data-label='Password'>{login.password}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Table
