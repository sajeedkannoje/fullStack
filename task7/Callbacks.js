// Simulate an asynchronous operation (e.g., reading a file)
function readFileAsync(callback) {
    setTimeout(() => {
        const data = 'This is the content of the file.';
        callback(null, data); // Pass null as the error argument to indicate success
    }, 2000);
}

// Asynchronous operation with a callback
readFileAsync((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
});

console.log('This code runs synchronously.');

