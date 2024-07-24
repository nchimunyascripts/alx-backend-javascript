function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success){
        resolve({
          status: 200,
          body: 'success',
        });
      } else {
        reject('The fake API is not working currently');
      }
    })
}

// console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));