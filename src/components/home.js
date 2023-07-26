import React from 'react';
import './home.css';

const Home = () => (
  <div className="home">
    <h2 className="home-heading">Welcome to Math Magicians!</h2>
    <p>
      <b>♥&nbsp;Discription:&nbsp;</b>
      This is a simple website that I have built just
      to understand basics of React.
      <br />
      <br />
      <b>♥&nbsp;Key features:&nbsp;</b>
      It has basic
      calculator that does basic arithmetic calculations, and also displays
      quotes that are called from an external API.&nbsp;
      <br />
      <br />
      <b>♥&nbsp;Future features:&nbsp;</b>
      I want to add a currency convetor and different times from different time
      zones that can be filtered by cities and countries.
    </p>
    <br />
  </div>
);

export default Home;
