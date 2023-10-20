import React from 'react';
import UpdateConfiguration from "../updateForm/UpdateConfiguration";

function ConfigurationCard() {
    const [configuration, setConfiguration] = React.useState(JSON.parse(localStorage.getItem('configuration')))
    const [showFormUpdate, setShowFormUpdate] = React.useState(false);

    React.useEffect(()=>{
        setConfiguration(JSON.parse(localStorage.getItem('configuration')))
    },[])

    const handleShowFormUpdate = () => {
        setShowFormUpdate(true);
    };

    const handleManuUpdate = (title) => {
        // Logique de création de section, à implémenter selon vos besoins

        // Réinitialiser l'affichage du formulaire
        setShowFormUpdate(false);
    };
    return (
        <div className="card p-4">
            <div className="card-body">
                <h5 className="card-title">Configuration du restaurant</h5>
                <p><strong>Nom du restaurant:</strong> {configuration.nomRestaurant}</p>
                <p><strong>URL du site:</strong> {configuration.urlSite}</p>
                <p><strong>Couleur des liens:</strong> {configuration.couleurLiens}</p>
                <p><strong>Photo de la bannière:</strong> {configuration.photoBanniere}</p>
            </div>
            {showFormUpdate ? (
                <UpdateConfiguration onSectionCreate={handleManuUpdate} configuration={configuration} />
            ) : null}
            <a href="#" className="card-link" onClick={handleShowFormUpdate}>modifier configuration</a>
        </div>
    );
}

export default ConfigurationCard;