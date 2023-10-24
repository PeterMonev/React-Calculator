import "../Contact/Contact.css";

import { useEffect, useState } from "react";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({}); 
    const [showNotification, setNotification] = useState(false);

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // Valdation
    const validate = () =>{
      let currError = {};

      if(formData.name.length < 3 || formData.name.length > 20){
        currError.name = "Name should be between 2 and 20 characters long.";
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!emailRegex.test(formData.email)){
        currError.email = "Email must be like example@abv.bg";
      }

      if(formData.message.length < 10 || formData.message.length > 300){
        currError.message = "Message should be between 10 and 300 characters.";
      }

      setErrors(currError);
      return Object.keys(currError).length === 0;

    }
        
    // Submit
    const onSubmit = async(event) =>{
        event.preventDefault();

        if(validate()){

          try {
            console.log(formData);
            setNotification(true);

            setFormData({
              name: '',
              email: '',
              message: '',
            });

          } catch (error) {
            console.error(error.message);
          }
        } else {
          console.log('erros');
        }
    }

    // Successfuly Notifacitaion
    useEffect(()=>{
      if(showNotification){
         setTimeout(()=>{
          setNotification(false);
        }, 3000);
      }
    }, [showNotification])
  
  return (
    <div className="div__contactForm">

      <form className="contactForm" onSubmit={onSubmit}>
      <h2>CONTACT US</h2>

        <div>
        <i className="fa-solid fa-user"></i>
        <label htmlFor="name">Name:</label>
        {errors.name && <p className="contactForm_p">{errors.name}</p>}
        <input onChange={onChange}onBlur={validate} name="name" value={formData.name} placeholder="Write your name here.." ></input>

        </div>

         <div>
         <i className="fa-solid fa-envelope"></i>
        <label htmlFor="email">Email:</label>
        {errors.email && <p className="contactForm_p">{errors.email}</p>}
        <input onChange={onChange} onBlur={validate} name="email" value={formData.email} placeholder="Let us know how to contact you back.."></input>
        </div>

        <div>
        <i className="fa-solid fa-message"></i>
        <label htmlFor="message:">Message:</label>
        {errors.message && <p className="contactForm_p">{errors.message}</p>}
        <textarea onChange={onChange} onBlur={validate}  name="message" value={formData.message} placeholder="What would you like to tell us.."></textarea>
        </div>
        <button className="formButton">Send Message</button>
      </form>

      {showNotification && <div className="notificationMessage">Message sent successfully!</div>}
    </div>
  );
};
