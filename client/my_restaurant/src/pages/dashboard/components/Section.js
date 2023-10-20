import React from "react";
import NewSection from "./NewSection"
import axios from "axios";
import SingleSection from "./SingleSection";

const Section = ({section, menu}) => {
    const [showForm, setShowForm] = React.useState(false);
    const [sections, setSection] = React.useState()

    const handleShowForm = () => {
        setShowForm(true);
    };

    React.useEffect(()=>{
        const getSections = async ()=>{
            const response = await axios.get(`http://localhost:8080/section/${menu.id}`);
            if(response.data.length > 0){
                setSection(response.data)
            }
        }
        getSections();
    },[])

    const handleSectionCreate = (title) => {
        // Logique de création de section, à implémenter selon vos besoins
        console.log('Création de la section avec le titre :', title);

        // Réinitialiser l'affichage du formulaire
        setShowForm(false);
    };


    return (
        <div>
            {showForm ? (
                <NewSection onSectionCreate={handleSectionCreate} section={section} menu={menu} />
            ) : (
                <div>
                    { sections ? sections.map(v => <SingleSection section={v}/>) : null}
                    <a className="card-link" onClick={handleShowForm}>
                        Créer une nouvelle section
                    </a>
                </div>

            )}
        </div>
    );
}
export default Section