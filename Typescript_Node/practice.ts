function examplePromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      // Some asynchronous operation
      setTimeout(() => {
        const success = true;
  
        if (success) {
          resolve('Operation successful');
        } else {
          reject(new Error('Operation failed'));
        }
      }, 1000);
    });
  }
  
  // Using the promise
  examplePromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });

    
    function fetchData(): Promise<{ data: string }> {
        return new Promise((resolve, reject) => {
          // Some asynchronous operation
          setTimeout(() => {
            const success = true;
      
            if (success) {
              resolve({ data: 'Some data' });
            } else {
              reject(new Error('Failed to fetch data'));
            }
          }, 1000);
        });
      }
      
      // Using the promise
      fetchData()
        .then((result) => {
          console.log(result.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
      
  