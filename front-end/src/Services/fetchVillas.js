/* eslint-disable consistent-return */
const baseURL = 'http://18.228.59.63:3001/villas/';

export const fetchVillas = async () => {
  const apiRequest = await fetch(baseURL);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export const fetchVillaImages = async (name) => {
  if (name) {
    const apiRequest = await fetch(`${baseURL}${name}/`);
    const apiResponse = await apiRequest.json();
    return apiResponse;
  }
};
