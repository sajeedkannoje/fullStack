// Simulate an asynchronous operation (e.g., fetching data from an API)
function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'Data fetched successfully.' };
            resolve(data); // Resolve the promise with the data
            // or reject(new Error('Error occurred')); // Uncomment this line to simulate an error
        }, 2000);
    });
}

// Asynchronous operation with a promise
fetchDataAsync()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

console.log('This code runs synchronously.');

