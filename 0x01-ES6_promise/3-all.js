// 3-all.js
import { createUser, uploadPhoto } from "./utils";

function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] =  Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.error("Signup system offline");
  }
}

export default handleProfileSignup;
