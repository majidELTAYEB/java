import React from "react";
import axios from "axios";
import NewRestaurant from "./NewRestaurant";
import Menu from "./Menu";
import ConfigurationCard from "./ConfigurationCard";

const Restaurant = () =>{
    const [restaurant, setRestaurant] = React.useState(null)
    const [configuration, setConfiguration] = React.useState(JSON.parse(localStorage.getItem('configuration')))
    React.useEffect(()=>{
        /*const configuration = JSON.parse(localStorage.getItem('configuration'))*/
        const getRestaurant = async ()=>{
            const response = await axios.get(`http://localhost:8080/restaurant/${configuration.id}`);
            if(response.data){
                setRestaurant(response.data)
            }
        }
        getRestaurant();

    },[])

    return(
        <div>
            <ConfigurationCard/>
            {restaurant ?
                <div>
                   {/* <p>{restaurant.informationsContact}</p>
                    <p>{restaurant.adresse}</p>*/}
                    <Menu restaurant={restaurant}/>
                </div>
                :
                <NewRestaurant/>}
        </div>
    )
}
export default Restaurant;