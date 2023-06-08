import { handleGETAPI } from './GetAPI';

const queryParam = new URLSearchParams({
  category: 'intelligence',
  limit: '1',
});

const url = `https://api.api-ninjas.com/v1/quotes?${queryParam}`;
const key = {
  name: 'X-Api-Key',
  value: process.env.REACT_APP_API_NINJA,
};
const error = {
  quote: 'The greatest teacher, failure is',
  author: 'Yoda',
  category: 'Error: unable to fetch data',
};

const fetchData = async (url, key, signal, controller, cb) => {
  let res = await handleGETAPI(url, key, signal);
  if (res instanceof Error) res = [error];
  cb(res);
  return () => {
    controller.abort();
  };
};

export { fetchData, key, url };
