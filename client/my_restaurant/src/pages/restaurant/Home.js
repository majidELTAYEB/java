import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Menus from "./Menus";
import Banner from "./Banner";
import Review from "./Review";

const Home = () =>{
    let { urlSite } = useParams();
    const [configuration, setConfiguration] = React.useState(null)
    const [restaurant, setRestaurant] = React.useState(null)
    const [menu, setMenu] = React.useState(null)
    const [reviews, setReviews] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(()=>{
        const getAll = async () => {
            const getConfig = await axios.get(`http://localhost:8080/configuration/url/${urlSite}`)
            if(!getConfig.data){
                navigate("/404")
            }else{
                setConfiguration(getConfig.data)

                const getRest = await axios.get(`http://localhost:8080/restaurant/${getConfig.data.id}`)
                setRestaurant(getRest.data)

                const getMenu = await axios.get(`http://localhost:8080/menu/${getRest.data.id}`)
                setMenu(getMenu.data)

                const getReviews = await axios.get(`http://localhost:8080/review/${getRest.data.id}`)
                setReviews(getReviews.data)
            }








        }
        getAll()

    },[])
    console.log(restaurant)
    return (
        <div>
            <Banner configuration={configuration}/>
            <Menus menus={menu} couleurLiens={configuration?.couleurLiens} />
            {restaurant ? <Review reviews={reviews} idRestaurant={restaurant.id} couleurLiens={configuration?.couleurLiens}/> : null}

            <footer className="bg-dark text-white text-center p-3 mt-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Nous contacter</h5>
                            <p>Email: contact@example.com</p>
                            <p>Téléphone: {restaurant?.informationsContact}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Adresse</h5>
                            <p>{restaurant?.adresse}</p>
                            <p>75001 Paris</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Heures d'ouverture</h5>
                            <p>Lundi - Vendredi: 9h00 - 18h00</p>
                            <p>Samedi - Dimanche: Fermé</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Home