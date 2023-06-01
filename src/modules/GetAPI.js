/**
 * Helper function for GETing data as JSON with fetch.
 *
 * @param {string} url - URL to GET data to
 * @return {Object} - Response body from URL that was GETed
 */
const fetchDataJSON = async (URL, authObj = false) => {
  const myHeaders = new Headers();
  if (authObj) myHeaders.append(authObj.name, authObj.value);
  const fetchOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  const response = await fetch(URL, fetchOptions);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const dataJSON = await response.json();
  return dataJSON;
};

/**
 * Event handler for a event influence fetch get api.
 * @param {SubmitEvent} event
 */
const handleGETAPIevent = async (event, url, apiKey = false) => {
  event.preventDefault();
  try {
    const responseData = await fetchDataJSON(url, apiKey);
    return responseData;
  } catch (error) {
    return error;
  }
};

/**
 * Event handler for a fetch get api.
 */
const handleGETAPI = async (url, apiKey = false) => {
  try {
    const responseData = await fetchDataJSON(url, apiKey);
    return responseData;
  } catch (error) {
    return error;
  }
};

export {
  fetchDataJSON, handleGETAPIevent, handleGETAPI,
};
