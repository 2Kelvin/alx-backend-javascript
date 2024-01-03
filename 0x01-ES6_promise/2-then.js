export default function handleResponseFromAPI(promise) {
  const thePromise = new Promise((resolve, reject) => {
    if (promise) {
        resolve({ status: 200, body: 'success' });
    }
    else {
        reject(new Error());
    }
  });
  thePromise.then(console.log("Got a response from the API"));
}