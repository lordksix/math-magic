import {
  useState, useEffect, Suspense, lazy,
} from 'react';
import { fetchData, key, url } from 'lib/fetchNinjaAPI';

function Loading() {
  return <p>🌀Loading...</p>;
}

const QuoteList = lazy(() => import('./QuoteList'));

const QuotesApp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller.signal;
    fetchData(url, key, signal, controller, setData);
  }, []);

  return (
    <div className="quotes-wrapper">
      <Suspense fallback={<Loading />}>
        <QuoteList data={data} />
      </Suspense>
    </div>
  );
};

export default QuotesApp;
