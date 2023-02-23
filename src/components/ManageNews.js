import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import editIco from '../assets/images/edit.png';
import delIco from '../assets/images/del.png';
import '../assets/styles/ManageNews.css';
import 'react-toastify/dist/ReactToastify.css';

function ManageNews() {
  const [newsList, setNewsList] = useState([]);

  const loadNews = async () => {
    const response = await fetch('http://localhost:5001/news/get');
    setNewsList(await response.json());
  };

  useEffect(() => {
    loadNews();
  }, []);

  const deleteNews = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      axios.delete(`http://localhost:5001/news/remove/${id}`);
      toast.success('Deleted Sucessfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setTimeout(() => loadNews(), 500);
    }
  };

  // checkout line 14 (Results.js) for data fetch
  return (
    <div className="newsList">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="newsListTitle">Manage News</h1>
      <div className="newsList__list">
        {console.table(newsList)}
        {newsList.map((news, id) => {
          return (
            <div className="news" key={id}>
              <div className="container">
                <img src={news.firstImageUrl} alt="Avatar" className="image" />
                <div className="overlay">
                  <div className="text">{news.title}</div>
                  <div className="news__readMore">
                    <Link to={`/NewsAction/${news.id}`}>
                      <img src={editIco} alt="" className="news__action" />
                    </Link>
                    <img
                      className="news__action"
                      src={delIco}
                      alt=""
                      onClick={() => deleteNews(news.id)}
                    />
                  </div>
                </div>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManageNews;
