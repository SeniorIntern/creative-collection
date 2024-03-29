import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeBody from './components/HomeBody';
import NotFound from './components/NotFound';
import Products from './components/Products';
import NewsDetail from './components/NewsDetail';
import NewsList from './components/NewsList';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Dashboard from './components/Dashboard';
import ManageNews from './components/ManageNews';
import NewsAction from './components/NewsAction';
import AddNews from './components/AddNews';

export default function App() {
  return (
    <Router>
      <div className="mainBox">
        <Header />
        <div className="app__container">
          <Routes>
            <Route path="/" element={<HomeBody />} />
            <Route path="/services" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/manageNews" element={<ManageNews />} />
            <Route path="/NewsAction/:id" element={<NewsAction />} />
            <Route path="/addNews" element={<AddNews />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
