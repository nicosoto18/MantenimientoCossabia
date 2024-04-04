const Validation = (data)=>{
   
 const errors = {};

    if(data.user_name.length > 30 ) {errors.n1 = "Por favor, ingrese solo su nombre"}
    
     
     if(!data.user_email){errors.e1 = "Ingrese su email"}
     if(data.user_email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email)){errors.e2 = "El email debe ser valido"}
    else if(data.user_email.length > 35) {errors.e3 = "Su email es demasiado largo"}


     if(data.telefono.length > 10) {errors.t2 = "Ingresa tu numero sin 0 ni 15"}

    if(data.message.length>800){errors.c1 = "Por favor, se mas breve en tu consulta"}
    
    return errors;
   
};

export default Validation;

