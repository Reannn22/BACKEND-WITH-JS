function multipleBy(x) {
    return function(y) {
      return x * y;
    }
  }
    const multipleByFive = multipleBy(5);
    console.log(multipleByFive(7)); // Output: 35
    console.log(multipleByFive(10)); // Output: 50