import React from "react";
import axios from "axios";
import NewSection from "./NewSection";
import UpdatePlat from "../updateForm/UpdatePlat";
const Plat = ({section})=>{
    const [plat, setPlat] = React.useState()
    const [showForm, setShowForm] = React.useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };
    React.useEffect(()=>{
        const getPlats = async () => {
            const response = await axios.get(`http://localhost:8080/plat/${section.id}`)
            if(response.data.length > 0){
                setPlat(response.data)
            }
        }
        getPlats()

    },[])

    const handleDeletePlat = async (id) =>{
        await axios.delete(`http://localhost:8080/plat/${id}`)
        window.location.reload(false);
    }

    const handlePlatUpdate = (title) => {
        // Logique de création de section, à implémenter selon vos besoins

        // Réinitialiser l'affichage du formulaire
        setShowForm(false);
    };

    return (
        <div>
            <h2>
                Plats
            </h2>
            <div className="d-flex flex-wrap justify-content-between">
                {plat?.map(v=>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={v.photo} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{v.nom}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Prix:</strong> {v.prix}</h6>
                            <h6 className="card-subtitle mb-2 text-muted"><strong>Allergenes:</strong> {v.allergenes}</h6>
                            <p className="card-text"><strong>Description:</strong> {v.description}</p>
                            <a href="#" className="card-link" onClick={()=>handleDeletePlat(v.id)}>supprimer</a>
                            {showForm ? (
                                <UpdatePlat onSectionCreate={handlePlatUpdate} plat={v} />
                            ) : <a href="#" className="card-link" onClick={handleShowForm}>modifier</a>}

                        </div>
                    </div>

                )}
            </div>

        </div>

    )
}
export default Plat;