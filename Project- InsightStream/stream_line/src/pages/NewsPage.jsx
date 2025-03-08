import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=popular&apiKey=68d24b86f2884a98975d47356c0e25a1')
    .then(response => setArticles(response.data.articles || []))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="news-page">
      <h2>Latest News</h2>
      {articles.length > 0 ? (
        <div className="news-list">
          {articles.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.urlToImage|| "https://via.placeholder.com/150"} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default NewsPage;
