import NavigationBar from "../../helpers/Nav";
import "./Historia.css";
import titulo from "../../../assets/titulo.png";
import Footer from "../../helpers/Footer";

function Historia() {
    return (
        <div className="container">
            <NavigationBar />
            <div className="Contenido">
                <div className="Titulo">
                    <img src={titulo} className="img" alt="Título" />
                </div>
                <div className="texxto">
                    <p className="text1">
                        Statframe es una aplicación diseñada a traves de un proyecto universitario, <br />
                        que busca facilitar a los jugadores diferentes apartados donde podran encontrar <br />
                        notificaciones de los eventos, alertas del juego, con el fin de tener <br />
                        mayor accesibilidad a estos sin perderse las nuevas actualizaciones que WARFRAME <br />
                        ofrece. <br /> <br />
                        Nuestra aplicación esta basada en WARFRAME. Warframe es un videojuego de disparos en tercera <br />
                        persona gratuito de modalidad jugador contra entorno individual o cooperativo, <br />
                        aunque posee una modalidad jugador contra jugador en los modos de juego conocidos como Cónclave, <br />
                        y Lunar.
                    </p> 
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Historia;
