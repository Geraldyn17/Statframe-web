import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavigationBar from './components/helpers/Nav.jsx'
import Footer from './components/helpers/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <NavigationBar/>
    <Footer/>
  </React.StrictMode>,
)
