import { doSomething } from './utils.mjs';

console.log('Start.');

doSomething()
  .then((value) => {
    console.log(value);
  });

console.log('End.');

/* Output:
Start.
End.
You did it.
*/