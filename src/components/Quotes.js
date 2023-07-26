import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
// import backgroundImage from '../../assets/MM-BG1.png'
import './quotes.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
        const apiKey = 'O6cCUithwsgOIfcYuEV0Vw==3YIjiRhzwxmoi13s';
        const params = {
          category: 'inspirational',
          limit: 10,
        };

        const headers = {
          'X-Api-Key': `${apiKey}`,
        };

        const response = await axios.get(apiUrl, { params, headers });
        setQuotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQuotes();
  }, []);

  // Display number of pages and current page number
  const handleNextQuote = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, quotes.length - 1));
  };

  const handlePrevQuote = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Handle pagination arrows
  // const handlePrevArrow = () => {
  //   setCurrentIndex((prevIndex) => prevIndex - 1);
  // };

  // const handleNextArrow = () => {
  //   setCurrentIndex((prevIndex) => prevIndex + 1);
  // };

  // Calling two functions in the same function
  // const handlePrev = () => {
  //   handlePrevArrow();
  //   handlePrevQuote();
  // };

  // const handleNext = () => {
  //   handleNextArrow();
  //   handleNextQuote();
  // };

  // Display 1 quote at a time
  // const renderQuote = () => {
  // const startIndex = currentIndex * 1;
  // const endIndex = startIndex + 1;

  //   return data.slice(startIndex, endIndex).map((item) => (
  //     <div key={item.id} className="quote_div">
  //       <p>{item.quote}</p>
  //       <span>
  //         -
  //         {item.author}
  //       </span>
  //     </div>
  //   ));
  // };

  return (
    <div className="quotes">
      <h1>QUOTE</h1>
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {quotes.length > 0 && (
            <div key={quotes[currentIndex].id} className="quote_div">
              <p>
                &#34;
                {quotes[currentIndex].quote}
                &#34;
              </p>
              <span>
                ~
                {quotes[currentIndex].author}
              </span>
            </div>
          )}
          <div className="pagArrows">
            {currentIndex > 0 && (
              <FaChevronLeft
                onClick={handlePrevQuote}
                size={25}
                style={{ cursor: 'pointer' }}
                className="arrow"
              />
            )}
            <div className="pageNumber">
              {currentIndex + 1}
              {' '}
              of
              {' '}
              {quotes.length}
            </div>
            {currentIndex < quotes.length - 1 && (
              <FaChevronRight
                onClick={handleNextQuote}
                size={25}
                style={{ cursor: 'pointer' }}
                className="arrow"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quotes;
