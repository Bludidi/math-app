import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quotes.css';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
    const apiKey = 'O6cCUithwsgOIfcYuEV0Vw==3YIjiRhzwxmoi13s';
    const params = {
      category: 'knowledge',
      limit: 1,
    };

    const headers = {
      'X-Api-Key': `${apiKey}`,
    };

    axios
      .get(apiUrl, { params, headers })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        error('Error fetching data:', error);
      });
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="quotes">
      <h1>QUOTE</h1>
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((item) => (
            <div key={item.id} className="quote_div">
              <p>{item.quote}</p>
              <span>
                -
                {item.author}
              </span>
            </div>
          ))}
          <button type="button" onClick={handleRefresh} className="q-btn">
            Next Quote
          </button>
        </>
      )}
    </div>
  );
};

export default Quotes;
