import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ✅ import this
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-medium-image-zoom/dist/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ wrap App here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
