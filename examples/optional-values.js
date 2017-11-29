
import { struct } from 'superstruct'

// Define a struct to validate with.
const User = struct({
  name: 'string',
  email: 'string',
  age: 'number',
  is_admin: 'boolean?',
})

// Define data to be validated.
const data = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  age: 42,
}

// Validate the data by calling `assert`, and storing the return value in the
// `user` variable. Any property that wasn't defined will be set to its default.
let user

try {
  user = User.assert(data)
  console.log('Valid!', user)
} catch (e) {
  throw e
}

// 'Valid!' {
//   name: 'Jane Smith',
//   email: 'jan@example.com',
//   age: 42,
// }
