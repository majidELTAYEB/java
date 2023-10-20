import React from "react";
import axios from "axios";
import NewPlat from "./NewPlat";
import Plat from "./Plat";
import UpdateMenu from "../updateForm/UpdateMenu";
import UpdateSection from "../updateForm/updateSection";

const SingleSection = ({section}) => {
    const [showForm, setShowForm] = React.useState(false);
    const [plat, setPlat] = React.useState(JSON.parse(localStorage.getItem('plat')))
    const [showFormUpdate, setShowFormUpdate] = React.useState(false);
    React.useEffect(()=>{
        const getPlats = async () => {
            const response = await axios.get(`http://localhost:8080/plat/${section.id}`)
            if(response.data.length > 0){
                setPlat(response.data)
            }
        }
        getPlats()

    },[])

    const handleSectionCreate = (title) => {
        // Logique de création de section, à implémenter selon vos besoins
        console.log('Création de la section avec le titre :', title);

        // Réinitialiser l'affichage du formulaire
        setShowForm(false);
    };

    const handleShowForm = () => {
        setShowForm(true);
    };

    const handleDeleteSection = async () => {
        await axios.delete(`http://localhost:8080/section/${section.id}`)
        window.location.reload(false);
    }

    const handleSectionUpdate = (title) => {
        // Logique de création de section, à implémenter selon vos besoins

        // Réinitialiser l'affichage du formulaire
        setShowFormUpdate(false);
    };

    const handleShowFormUpdate = () => {
        setShowFormUpdate(true);
    };

    return(
        <div>
            {showForm ? (
                <NewPlat onSectionCreate={handleSectionCreate} section={section} />
            )
                :
                    <div className="card">
                        <h1>Section</h1>
                        <div className="card-title">
                            <h3>
                                {section.nom}
                            </h3>
                        </div>
                        <div className="card-body">
                            <Plat section={section}/>
                        </div>
                        <div className="d-flex flex-row row justify-content-center align-items-center">
                            <a href="#" className="card-link" onClick={handleShowForm}>Créer un plat</a>
                            <a href="#" className="card-link" onClick={handleDeleteSection}>supprimer section</a>
                            <a href="#" className="card-link" onClick={handleShowFormUpdate}>modifier section</a>
                        </div>
                        {showFormUpdate ? (
                            <UpdateSection onSectionCreate={handleSectionUpdate} section={section} />
                        ) : null}
                    </div>
                }
        </div>
    )
}
export default SingleSection