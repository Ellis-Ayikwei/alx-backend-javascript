// 3-all.js
import { createUser, uploadPhoto } from "./utils";

async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.error("Signup system offline", error);
  }
}

export default handleProfileSignup;
