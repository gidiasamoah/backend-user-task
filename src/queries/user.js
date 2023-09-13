/**
 * Add New User
 **/
const addUser = `
  INSERT INTO users(
    email,
    password,
    
  )
  VALUES ($1, $2,) RETURNING id, email, password
`;

/**
 * Find user by Email
 */

const findUserbyEmail = `
 SELECT id, email, password FROM users WHERE email=$1
`

module.exports = {
    addUser,
    findUserbyEmail
}