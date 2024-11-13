const user = {
    name: 'John',
    email: 'john@dicoding.com',
  };
  
  // Membekukan objek user
  Object.freeze(user);
  
  // Mencoba mengubah properti dari objek yang dibekukan
  user.email = 'doe@dicoding.com';
  console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }