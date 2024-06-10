import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './Noticias.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavigationBar from "../../helpers/Nav";
import Footer from "../../helpers/Footer";

const Noticias = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.warframestat.us/pc/news');
    
        const filteredData = response.data.filter(news => news.translations.es);
        setData(filteredData);
      } catch (error) {
        console.error('Error cargando la informacion', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>cargando...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <nav style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <NavigationBar />
      </nav>
      <div className='newsMainContainer'>
        <div className='cards-conteiner'>
          <Slider {...settings}>
            {data.map(news => (
              <div key={news.id} className="card">
                <img src={news.imageLink} alt="Icon" onClick={() => window.open(news.link, '_blank')} />
                <div className="card-body">
                  <h2>{news.translations.es || "Título no disponible"}</h2>
                  <p>Publicado en {new Date(news.date).toLocaleString()}</p>
                  <a href={news.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">LEER MÁS</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <footer><Footer /></footer>
    </div>
  );
};

export default Noticias;
