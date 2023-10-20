import React from "react";
import axios from "axios";

const OneSections = (section) => {
    const [plat, setPlat] = React.useState(JSON.parse(localStorage.getItem('plat')))
    React.useEffect(()=>{
        const getplats = async () => {
            const response = await axios.get(`http://localhost:8080/plat/${section.id}`)
            if(response.data.length > 0){
                localStorage.setItem('section', JSON.stringify(response.data));
                setPlat(response.data)
            }
        }
        getPlats()

    },[])
}
export default OneSections;