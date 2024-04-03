import Styles from "./FormularioConsulta.module.css"
import { useState } from "react";
import Validation from "./Validation";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormularioConsulta = () => {
  
  const [userData, setUserData ] = useState({
    user_name: "",
    user_email: "",
    telefono: "",
    message: ""
  });
  
  const [errors,setErrors] = useState({})
  
  const handleChange=(event)=>{
    console.log("EL NAME ES ", event.target.name)
    console.log("EL VALUE ES ", event.target.value)
    setUserData({
      ...userData,
      [event.target.name] : event.target.value 
    });
    //para tomar el estado actual
    const validationErrors = Validation({
      ...userData,
      [event.target.name] : event.target.value
    });
    
    setErrors(validationErrors)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7y3mng2', 'template_oirh0rj', form.current, {
        publicKey: 'tIGXNQ51peG0toIqy',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    
//   return (
//     <form ref={form} onSubmit={sendEmail}>
      
//       <input type="text" name="user_name" />
      
//       <input type="email" name="user_email" />
     
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };


////////
  // const handleSubmit=(event)=>{
  //   event.preventDefault()
  //   if(!errors.length){
  //    return console.log("campos completos", userData)
  //   }
    
  //   return console.log("datos incompletos ", errors);

  // }


  return (
    <div>
      <section>
        <div>
          <form action="" className={Styles.Formulario} onSubmit={sendEmail} ref={form}>

          <div className={Styles.contenidoFormulario}>

          <div className={Styles.inputCointainer}>
            <input 
            type="text" 
            placeholder="Nombre" 
            className={Styles.inputs}
            name="user_name"
            onChange={handleChange}
            />
            {errors.n1 && <p className={Styles.errores}>{errors.n1}</p>}
            </div>
            
            <div className={Styles.inputCointainer}>
            <input
              type="email"
              placeholder="Email (opcional)"
              className={Styles.inputs}
              onChange={handleChange}
              name="user_email"
              />
              {errors.e2 && <p className={Styles.errores}>{errors.e2}</p>}
              {errors.e3 && <p className={Styles.errores}>{errors.e3}</p>}
              </div>

             <div className={Styles.inputCointainer}>
            <input
              type="text"
              placeholder="Telefono"
              className={Styles.inputs}
              name="telefono"
              onChange={handleChange}
              />
            {errors.t1 && <p className={Styles.errores}>{errors.t1}</p>}
            {errors.t2 && <p className={Styles.errores}>{errors.t2}</p>}
              </div>
  
             <div className={Styles.textareaContainer}>
            <textarea
              name="message"
              id="consulta"
              cols="30"
              rows="10"
              className={Styles.TextareaForm}
              placeholder="Ingrese su consulta"
              onChange={handleChange}
              ></textarea>
            {errors.c1 && <p className={Styles.errores}>{errors.c1}</p>}
              </div>

            <button className={Styles.btEnviarConsulta} type="submit" value="Send">
              Envia tu consulta
            </button>
          
              </div>

          </form>
        </div>
      </section>
    </div>
  );
};

export default FormularioConsulta