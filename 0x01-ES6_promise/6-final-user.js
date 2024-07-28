import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const photoResponse = await uploadPhoto(fileName);
    const userResponse = await signUpUser(firstName, lastName);

    return {
      status: 200,
      value: `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`,
    };
  } catch (error) {
    return {
      status: 400,
      value: error,
    };
  }
};

export default handleProfileSignup;
