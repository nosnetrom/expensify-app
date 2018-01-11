const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'JMT',
      age: 39
    });
    //reject('Error!');
  }, 1500)
  
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('My other promise');
      //reject('Error!');
    }, 5000)
    
  });
}).then((str) => {
  console.log('is this running? ', str)
}).catch((error) => {
  console.log('My error: ', error); // Render a friendly error messaage
});

/*
Alternatively, pass a 2nd function arg to then()
// =============================================
promise.then((data) => {
  console.log(data);
}, (error) => {
  console.log('My error: ', error); // Render a friendly error messaage
});
*/

console.log('after');