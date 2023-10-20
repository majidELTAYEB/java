import React from "react";
import axios from "axios";
import NewMenu from "./NewMenu";
import SingleMenu from "./SingleMenu";
import NewSection from "./NewSection";
import UpdatePlat from "../updateForm/UpdatePlat";

const Menu = ({restaurant}) =>{
    const [menu, setMenu] = React.useState(null)
    const [showForm, setShowForm] = React.useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    React.useEffect(()=>{
        const getMenus = async ()=>{
            const response = await axios.get(`http://localhost:8080/menu/${restaurant.id}`);
            if(response.data.length > 0){
                setMenu(response.data)
            }
        }
        getMenus();

    },[])
    const handleSectionCreate = (title) => {
        // Logique de création de section, à implémenter selon vos besoins
        console.log('Création de la section avec le titre :', title);

        // Réinitialiser l'affichage du formulaire
        setShowForm(false);
    };


    return(
        <div>
            {showForm ? (
                    <NewMenu onSectionCreate={handleSectionCreate} restaurant={restaurant} />
                )
                :
                <div>
                    {menu ? menu.map((v)=> <SingleMenu menu={v}/>) : <NewMenu restaurant={restaurant}/>}
                    <button className="btn btn-primary" onClick={handleShowForm}>
                        Créer un menu
                    </button>
                </div>

            }

        </div>
    )
}
export default Menu