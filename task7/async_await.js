// Simulate an asynchronous operation (e.g., making an API request)
function makeApiRequestAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'API request completed.' };
            resolve(data); // Resolve the promise with the data
            // or reject(new Error('Error occurred')); // Uncomment this line to simulate an error
        }, 2000);
    });
}

// Asynchronous operation with async/await
async function fetchData() {
    try {
        const data = await makeApiRequestAsync();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();

console.log('This code runs synchronously.');

