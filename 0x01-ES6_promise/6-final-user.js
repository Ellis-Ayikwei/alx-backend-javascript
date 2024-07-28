import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const [photoUploadResult, userSignupResult] = await Promise.allSettled([
      uploadPhoto(fileName),
      signUpUser(firstName, lastName),
    ]);

    const status =
      photoUploadResult.status === 'fulfilled' && userSignupResult.status === 'fulfilled'
        ? 200
        : 400;

    return {
      status,
      value: {
        photoUploadResult,
        userSignupResult,
      },
    };
  } catch (error) {
    return {
      status: 400,
      value: error,
    };
  }
};

export default handleProfileSignup;
