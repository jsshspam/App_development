import { Bar } from "./Navbar";
import '../Assets/acss/Home.css'
import sample from "../Assets/aimages/Delivery Service Animated Promo Video.mp4"
import Footer from "./Footer";
export const Home = () => {
    return (
        <>
                <Bar />
           <div>
                <video autoPlay muted loop id="myVideo">
                    <source src={sample} type="video/mp4" />
                </video>
                <div className="logo"></div>
                </div>
                <Footer/>
        </>
    )
}