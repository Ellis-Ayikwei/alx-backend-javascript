import { createUser, uploadPhoto } from './utils';

const asyncUploadUser = async () => {
  const results = await Promise.allSettled([createUser(), uploadPhoto()]);

  const hasError = results.some((result) => result.status === 'rejected');
  if (hasError) {
    return {
      photo: null,
      user: null,
    };
  }

  return {
    photo: results[1].value,
    user: results[0].value,
  };
};

export default asyncUploadUser;
