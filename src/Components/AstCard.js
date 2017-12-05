import React from 'react';

const AstCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright } = props.data; //object destructuring!! passes each part of the props object to the card
  return (
    <div className="card">
      <h2>NASA Image of the Day</h2>
      <h4>{title}</h4>
      <a href={hdurl} className="wrapper">
        <img src={url} alt={title}/> 
      </a>
      <p>{explanation}</p>
      <span>{date}, {copyright}</span>
    </div>
  )
}

export default AstCard;
