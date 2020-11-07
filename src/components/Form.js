import React, {useState }  from 'react';
import FormStyles from "./Form.module.scss";
import Toggle from "../images/Toggle_Close.svg";

import CancelIcon from '@material-ui/icons/Cancel';
import {  IconButton }from '@material-ui/core';
import axios from 'axios';
import Button from "./Button";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Pulse from 'react-reveal/Pulse';

function Form(props) {

    const { setFormToggle } = props;

    const [loading, setLoading] = useState(false)

    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };

    const handleOnSubmit = e => {
      e.preventDefault();
      setLoading(true);
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/bd9007a4-f3eb-4937-a8e4-093cf161723f",
        data: new FormData(form)
      })
        .then(r => {
          setLoading(false)
          handleServerResponse(true, "Sent, Thanks!", form);
          setTimeout(() => handleServerResponse(true, "", form), 5000)
        })
        .catch(r => {
          setLoading(false);
          handleServerResponse(false, "Failed to send", form);
        });
    };
    
    return (
      <Pulse >
      <div className={FormStyles.form} id="contactform">
      {
        loading && <div className={FormStyles.overlay}>
        <div className={FormStyles.loader}><p>Sending...</p><span></span> <span></span> <span></span> <span></span></div>
        </div>
      }
      <IconButton  className={FormStyles.toggle} onClick={() => setTimeout(() => setFormToggle(false), 300 ) }>
      <CancelIcon style={{fontSize: "30px"}} />
      </IconButton>

          <p className={FormStyles.heading}>GET IN TOUCH WITH
          US</p>
          <p className={FormStyles.subHeading}>LET’S WORK TOGETHER! </p>

          <form  onSubmit={handleOnSubmit} className={FormStyles.formData}>
          <div className={FormStyles.userBox}>
          <input required  className={FormStyles.input} type="text" name="name"  />
          <label className={FormStyles.label}>Name</label>
        </div>
        <div className={FormStyles.userBox}>
          <input required className={FormStyles.input} type="email" name="email"  />
          <label className={FormStyles.label} >Email</label>
        </div>

        <div className={FormStyles.userBox}>
        <input required type="text"  name="message" className={FormStyles.input}  />
          <label className={FormStyles.label} >Message</label>
        </div>
          

<div className={FormStyles.buttonCover}><Button type="submit" text="SUBMIT" />
<a href="https://wa.me/+2348037296906?text=Hello,  %20Hello%20Aesthetics!" target="_blank">
<IconButton style={{height: "200px !important"}} ><WhatsAppIcon style={{color: "52CD60", fontSize: "40px"}} /></IconButton>
</a>
</div>
      

       {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""} style={{color: !serverState.status.ok ? "red" : "green"}}>
        {serverState.status.msg}
        </p>
    )}
          </form>
      </div>
      </Pulse>
 
    )
}

export default Form
