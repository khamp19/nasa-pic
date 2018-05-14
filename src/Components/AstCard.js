import React from 'react';

const AstCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright } = props.data; 
  return (
    <div className="card">
      <h1>NASA Image of the Day</h1>
      <h2>{title}</h2>
      <p>{date}</p>
      <a href={hdurl} className="wrapper">
        <img src={url} alt={title}/> 
      </a>
      <div className="info">
        <p>{explanation}</p>
        <p>copyright: {copyright}</p>
      </div>
    </div>
  )
}

export default AstCard;
