import NavigationBar from "../../helpers/Nav"
import Footer from "../../helpers/Footer"
import CommentForm from "../../helpers/CommentForm"
import CommentsList from "../../helpers/CommentList"
import "./Home.css"
import iconSF from "../../../assets/StatWIcon.png"
import iosIcon from "../../../assets/ios.png"
import andoroidIcon from "../../../assets/android.png"

const Home = () => {
    return (
        <div>
            <nav><NavigationBar /></nav>
            <div className="homeMainContainer">
                <div className=" mainInfo">
                    <img className="SFicon" src={iconSF} alt="" />
                    <p>
                        StatFrame permite visualizar desde el telefono movil estadísticas, <br /> como las probabilidades de obtención de objetos, misiones en curso <br />como fisuras del vacío, estado del mundo como ciclos de Cetus, Fortuna, <br /> Deimos y más de Warframe ademas de recibir notificaciones de las <br /> rotaciones deseadas
                    </p>
                    <div className="downloandSF">
                        <div className="downloadbtn">
                            <img className="downloadIcon" src={andoroidIcon} alt="" />
                            <h3>Descarga para Android</h3>
                        </div> 
                        <div className="downloadbtn">
                            <img className="downloadIcon" src={iosIcon} alt="" />
                            <h3>Descarga para iOs</h3>
                        </div> 
                            

                        
                      
                    </div>
                </div>
            </div>
            <CommentForm/>
            <CommentsList/>
            <footer><Footer /></footer>
        </div>

    )

}
export default Home