import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <h2>Data Feteched</h2>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
