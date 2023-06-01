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

  useEffect(() => {
    const fetchData = async () => {
      let res = await handleGETAPI(url, key);
      if (res instanceof Error) res = [error];
      const newRes = res.map((item) => ({ ...item, id: crypto.randomUUID().toString() }));
      setData(newRes);
    };
    fetchData();
  }, [setData]);

  return (
    <div className="quotes-wrapper">
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
