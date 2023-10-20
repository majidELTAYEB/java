import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Section from "./Section";

const Menus = ({menus, couleurLiens}) => {
    console.log(menus)
    return (
        <div>
            <h2>Menus</h2>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                style={{color:"blue"}}
                fill
            >
                {menus?.map((v)=>{
                    return(
                            <Tab eventKey={v.id} title={<span style={{color:couleurLiens}}>{v.nom}</span>} >
                                <Section menuId={v.id}/>
                            </Tab>
                        )
                })}

            </Tabs>
        </div>

    )
}

export default Menus