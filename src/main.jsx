import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Books from './Books';
import BookDetail from './BookDetail';
import Quotes from './Quotes';
import './index.css';
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Books />} />
          <Route path="/Books/:id" element={<BookDetail />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
