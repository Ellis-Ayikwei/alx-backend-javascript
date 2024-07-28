function getFullResponseFromAPI (success) {
  if (success === true) {
    return Promise.resolve({
      status: 200,
      body: 'success'
    });
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}

export default getFullResponseFromAPI;
