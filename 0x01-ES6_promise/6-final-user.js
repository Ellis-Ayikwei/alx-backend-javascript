import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export const handleProfileSignup = async (
  firstName,
  lastName,
  photoFileName
) => {
  const [userSignupResult, photoUploadResult] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(photoFileName),
  ]);

  return [userSignupResult, photoUploadResult].map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
};

export default handleProfileSignup;
