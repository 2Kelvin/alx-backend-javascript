import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((rs) => {
    const final = [];
    rs.forEach((dt) => {
      if (dt.status === 'fulfilled') {
        final.push({ status: dt.status, value: dt.value });
      } else {
        final.push({ status: dt.status, value: `${dt.reason}` });
      }
    });

    return final;
  });
}
