export default async function getResponseFromAPI() {
  const myPromise = await new Promise(response => {response});
  return myPromise;
}