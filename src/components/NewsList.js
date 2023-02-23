import React, { useEffect, useState } from 'react';
import '../assets/styles/NewsList.css';
import News from './News';

export default function NewsList() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    const getNewsList = async () => {
      const response = await fetch('http://localhost:5001/news/get');
      setNewsList(await response.json());
    };
    getNewsList();
  });

  return (
    <div className="newsList">
      <h1 className="newsListTitle">Upcoming Event' News</h1>
      <div className="newsList__list">
        {newsList.map((newslist, id) => {
          return <News key={id} {...newslist} />;
        })}
      </div>
    </div>
  );
}
