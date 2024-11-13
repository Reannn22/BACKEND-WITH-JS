function registerEmail(person, email) {
    return Object.assign(person, { email });
  }
  
  const person = {
    name: 'John',
    username: 'johndoe',
  };
  
  const personWithEmail = registerEmail(person, 'john@dicoding.com');
  
  console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
  console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }