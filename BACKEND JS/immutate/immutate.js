function max(arrayOfNumber) {
    // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
    return [...arrayOfNumber]
      .sort((a, b) => a - b)
      .pop();
  }
  
  function registerEmail(person, email) {
    // menggunakan spread operator untuk menduplikasi nilai person
    return { ...person, email };
  }
  
  const numbers = [10, 23, 24, 7, 42, 18];
  const largest = max(numbers);
  
  console.log(largest); // Output: 42
  console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]
  
  const person = {
    name: 'John',
    username: 'johndoe',
  };
  
  const personWithEmail = registerEmail(person, 'john@dicoding.com');
  
  console.log(person); // Output: { name: 'John', username: 'johndoe' }
  console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }