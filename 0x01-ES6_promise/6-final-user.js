import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export const handleProfileSignup = async (
  firstName,
  lastName,
  fileName
) => {
  const [userSignupResult, photoUploadResult] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return [userSignupResult, photoUploadResult].map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
};

export default handleProfileSignup;
