import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(pr => {
    console.log(`${pr[0].body} ${pr[1].firstName} ${pr[1].lastName}`);
  })
  .catch(() => console.log('Signup system offline'));
}