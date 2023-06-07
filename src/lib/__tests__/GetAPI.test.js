import { handleGETAPI } from 'lib/GetAPI';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
const dataResponse = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

test('the data is object', async () => {
  const data = await handleGETAPI(url);

  expect(data).toEqual(dataResponse);
});
