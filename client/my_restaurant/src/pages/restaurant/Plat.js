import React from "react";
import axios from "axios";

const Plat = ({sectionId}) => {
    const [plat, setPlat] = React.useState(null)

    React.useEffect(()=>{
        const Get = async () => {
            const getPlat = await axios.get(`http://localhost:8080/plat/${sectionId}`)
            setPlat(getPlat.data)
        }
        Get()
    },[])
    return (
        <div className="d-flex flex-wrap justify-content-between">
            {plat?.map((v) => (
                <div className="card" style={{ width: "18rem" }} key={v.id}>
                    <img className="card-img-top" src={v.photo} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{v.nom}</h5>
                        <p className="card-text">
                            {v.description}
                        </p>
                        <p className="card-text">
                            {v.prix} €
                        </p>
                        <p className="card-text">
                            {v.allergenes}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Plat