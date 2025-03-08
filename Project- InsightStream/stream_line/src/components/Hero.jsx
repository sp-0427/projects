import React, { useEffect } from "react";
import '../styles/Hero.css'
//import axios from 'axios';
//import { Link, useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import Spinner from 'react-bootstrap/Spinner';

const Hero = () => {
  const { topNews, setTopNews } = React.useContext(GeneralContext);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=68d24b86f2884a98975d47356c0e25a1`
        );
        const data = await response.json();
        setTopNews(data.articles); // Store news articles in state
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [setTopNews]);

  return (
    <>
      {topNews && topNews.length > 0 ?
      <div className='Hero-container'>

        
            <div className='hero-article-1' onClick={()=> window.open(topNews[1].url, '_blank')}  >
              <img src={topNews[1].urlToImage} alt="" />
              <h3>{topNews[1].title}</h3>
            </div>
            
            <div className='hero-article-2'>
                <div className='hero-article-small' onClick={()=> window.open(topNews[2].url, '_blank')}  >
                  <img src={topNews[2].urlToImage} alt="" />
                  <p>{topNews[2].title}</p>
                </div>
                <div className='hero-article-small' onClick={()=> window.open(topNews[3].url, '_blank')}  >
                  <img src={topNews[3].urlToImage} alt="" />
                  <p>{topNews[3].title}</p>
                </div>
                <div className='hero-article-small' onClick={()=> window.open(topNews[4].url, '_blank')}  >
                  <img src={topNews[4].urlToImage} alt="" />
                  <p>{topNews[4].title}</p>
                </div>
                <div className='hero-article-small' onClick={()=> window.open(topNews[5].url, '_blank')}  >
                  <img src={topNews[5].urlToImage} alt="" />
                  <p>{topNews[5].title}</p>
                </div>
            </div>
          </div>

        :

          <div className="spinners">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
          </div>
        
        }
    </>


  )
}

export default Hero