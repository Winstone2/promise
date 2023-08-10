# promise
    A function named fetchData is defined. Inside this function, a Promise is created with a resolve function.
    The Promise represents an asynchronous operation that will resolve after a delay of 2000 milliseconds (2 seconds).
    Once the delay is complete, the resolve function is called with the value 'Data fetched'.
    Outside the Promise definition, the fetchData function returns the Promise.
    The .then() method is used on the returned Promise. This method attaches a callback function that will be executed when the Promise is resolved.
    Inside the callback function, the resolved value ('Data fetched') is received and printed to the console.

Explanation of Promises:

A Promise in JavaScript represents an eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more structured and readable manner, making it easier to manage complex asynchronous flows.

Promises have three states:

    Pending: The initial state when the promise is created and hasn't resolved or rejected yet.
    Resolved: The state when the promise has successfully completed its operation. The resolved value is available.
    Rejected: The state when the promise encounters an error during its operation. The reason for the rejection is available.
