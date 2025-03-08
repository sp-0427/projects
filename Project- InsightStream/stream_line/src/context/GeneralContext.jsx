import axios from 'axios';
import React, { useEffect, useState } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export const GeneralContext = React.createContext();

const GeneralContextProvider = ({children}) => {

    const [topNews, setTopNews] = useState([])
    const [businessNews, setBusinessNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [politicsNews, setPoliticsNews] = useState([]);

    useEffect(() => { 
        fetchTopNews() 
        fetchBusinessNews()
        fetchPoliticsNews()
        fetchTechnologyNews()
      }, [])
    
      const fetchTopNews = async () => {
        try {
          const response = await axios.get('https://newsapi.org/v2/everything?q=popular&apiKey=68d24b86f2884a98975d47356c0e25a1');
          setTopNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

      const fetchBusinessNews = async () => {
        try {
          const response = await axios.get('https://newsapi.org/v2/everything?q=business&apiKey=68d24b86f2884a98975d47356c0e25a1');
          setBusinessNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchPoliticsNews = async () => {
        try {
          const response = await axios.get('https://newsapi.org/v2/everything?q=politics&apiKey=68d24b86f2884a98975d47356c0e25a1');
          setPoliticsNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchTechnologyNews = async () => {
        try {
          const response = await axios.get('https://newsapi.org/v2/everything?q=technology&apiKey=68d24b86f2884a98975d47356c0e25a1');
          setTechnologyNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

    
  return (
    <GeneralContext.Provider value={{topNews, businessNews, technologyNews, politicsNews}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider