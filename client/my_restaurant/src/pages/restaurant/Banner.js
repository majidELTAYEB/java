import React from 'react';

const Banner = ({configuration }) => {
    const bannerStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${configuration?.photoBanniere}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        color: 'white', // Couleur du texte en blanc
    };

    return (
        <div style={bannerStyle}>
            <h1>{configuration?.nomRestaurant}</h1>
        </div>
    );
};

export default Banner;