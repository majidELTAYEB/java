import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center my-5">
            <h1 className="display-4">Erreur 404 - Page non trouvée</h1>
            <p className="lead">Désolé, la page que vous recherchez n'existe pas.</p>
            <Link to="/admin" className="btn btn-primary">Retour à l'accueil</Link>
        </div>
    );
};

export default NotFound;