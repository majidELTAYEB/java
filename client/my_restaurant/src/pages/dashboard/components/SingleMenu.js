import React from "react";
import axios from "axios";
import Section from "./Section";
import UpdatePlat from "../updateForm/UpdatePlat";
import UpdateMenu from "../updateForm/UpdateMenu";
import restaurant from "./Restaurant";

const SingleMenu = ({menu}) => {
    const [section, setSection] = React.useState(JSON.parse(localStorage.getItem('section')))
    const [showFormUpdate, setShowFormUpdate] = React.useState(false);
    React.useEffect(()=>{
        const getSections = async () => {
            const response = await axios.get(`http://localhost:8080/section/${menu.id}`)
            if(response.data.length > 0){
                setSection(response.data)
            }
        }
        getSections()

    },[])

    const handleManuUpdate = (title) => {
        // Logique de création de section, à implémenter selon vos besoins

        // Réinitialiser l'affichage du formulaire
        setShowFormUpdate(false);
    };

    const handleDeleteMenu = async () => {
        await axios.delete(`http://localhost:8080/menu/${menu.id}`)
        window.location.reload(false);
    }

    const handleShowFormUpdate = () => {
        setShowFormUpdate(true);
    };
    return(
/*        <div>
            <p>{menu.nom}</p>
            <Section section={section} menu={menu}/>
            <a href="#" className="card-link" onClick={handleDeleteMenu}>supprimer menu</a>
        </div>*/
        <div className="card p-4 text-center">
            <div className="card-body">
                <h1>menu</h1>
                <h3 className="card-title">{menu.nom}</h3>
                <Section section={section} menu={menu} />
                <a href="#" className="card-link" onClick={handleDeleteMenu}>Supprimer le menu</a>
            </div>
            {showFormUpdate ? (
                <UpdateMenu onSectionCreate={handleManuUpdate} menu={menu} />
            ) : null}
            <a href="#" className="card-link" onClick={handleShowFormUpdate}>modifier menu</a>
        </div>

    )
}
export default SingleMenu