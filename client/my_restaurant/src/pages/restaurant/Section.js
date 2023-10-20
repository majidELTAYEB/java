import React from "react";
import axios from "axios";
import Plat from "./Plat";

const Section = ({menuId}) => {
    const [section, setsection] = React.useState(null)
    React.useEffect(()=>{
        const Get = async () => {
            const getSection = await axios.get(`http://localhost:8080/section/${menuId}`)
            setsection(getSection.data)
        }
        Get()
    },[])

    return(
        section?.map((v)=>{
            return (
                <div className="card">
                    <div className="card-header">
                        {v.nom}
                    </div>
                    <div className="card-body">
                        <Plat sectionId={v.id}/>
                    </div>
                </div>
            )
            })
    )
}
export default Section