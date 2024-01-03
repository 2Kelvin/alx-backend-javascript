export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');

  if (promise) {
    return { status: 200, body: 'success' };
  } else {
    return new Error();
  }
}
