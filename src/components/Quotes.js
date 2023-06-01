import { useState, useEffect } from 'react';
import { handleGETAPI } from '../modules/GetAPI';

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

const Calculator = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let res = await handleGETAPI(url, key);
      if (res instanceof Error) {
        setHasError(true);
        res = [error];
      }
      const newRes = res.map((item) => ({ ...item, id: crypto.randomUUID().toString() }));
      setData(newRes);
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) {
    return (
      <div className="quotes-wrapper">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className={`quotes-wrapper ${hasError ? 'error' : ''}`}>
      {data.map((item) => (
        <>
          <p key={item.id}>
            {item.quote}
            <br />
            {`- ${item.author}`}
          </p>
        </>
      ))}
    </div>
  );
};

export default Calculator;
