import React, { useState } from 'react';
import Map from "./Map";
import MapFormStyles from "./MapForm.module.scss";
import Form from "./Form";
import Button1 from './Button1';


function MapForm() {

    const [formToggle, setFormToggle] = useState(true)
    return (
        <div className={MapFormStyles.mapForm}>
        <div className={MapFormStyles.overlay}></div>
        <div className={MapFormStyles.form}>

        {
            formToggle && <Form formToggle={formToggle} setFormToggle={setFormToggle}  />
        }
        {
            !formToggle && <div className={MapFormStyles.message} onClick={() => setFormToggle(true)} >
            <Button1 text="MESSAGE US" /> </div>
        }
        </div>
            <Map />
        </div>
    )
}

export default MapForm;

// <button className={MapFormStyles.message} onClick={() => setFormToggle(false)}>MESSAGE US</button> 
