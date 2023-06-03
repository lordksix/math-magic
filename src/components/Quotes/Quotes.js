import {
  useState, useEffect, Suspense, lazy,
} from 'react';
import { handleGETAPI } from 'lib/GetAPI';

const url = 'https://api.api-ninjas.com/v1/quotes?category=intelligence&limit=1';
const key = {
  name: 'X-Api-Key',
  value: process.env.REACT_APP_API_NINJA,
};
const error = {
  quote: 'The greatest teacher, failure is',
  author: 'Yoda',
  category: 'Error: unable to fetch data',
};

function Loading() {
  return <p>🌀Loading...</p>;
}

const QuoteList = lazy(() => import('./QuoteList'));

const fetchData = async (url, key, signal, controller, cb) => {
  let res = await handleGETAPI(url, key, signal);
  if (res instanceof Error) res = [error];
  cb(res);
  return () => {
    controller.abort();
  };
};

const Calculator = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller.signal;
    fetchData(url, key, signal, controller, setData);
  }, []);

  return (
    <div className="quotes-wrapper">
      <p>Amazing quote</p>
      <Suspense fallback={<Loading />}>
        <QuoteList data={data} />
      </Suspense>
    </div>
  );
};

export default Calculator;
