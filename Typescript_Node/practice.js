function examplePromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var success = true;
            if (success) {
                resolve('Operation successful');
            }
            else {
                reject(new Error('Operation failed'));
            }
        }, 1000);
    });
}
examplePromise()
    .then(function (result) {
    console.log(result);
})
    .catch(function (error) {
    console.error(error.message);
});



async function myAsyncFunction() {
    try {
      const result = await myPromise;
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  myAsyncFunction();

  const promiseChain = myPromise
  .then((result) => {
    console.log(result);
    return 'Chaining success';
  })
  .then((chainedResult) => {
    console.log(chainedResult);
  })
  .catch((error) => {
    console.error(error.message);
  });

  async function myFunction(args) {
        try {
            let result = await axios.get('endpoint');
            
        }  catch (error) {
            console.log('Caught error in myFunction: ', error);
        }
        
  }
