import Styles from "./MenuHamburguesa.module.css";
import Logo from "../../Fotos/Logo.png";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const MenuHamburguesa = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [esMovil, setEsMovil] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setEsMovil(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setButtonActive(!buttonActive);
  };

  return (
    <div>
      {esMovil? (

        <div className={Styles.barraNavegacion}>
        <div className={Styles.contenedorDivs}>
          <img src={Logo} alt="Logo" />
          <i class="bi bi-list" id={Styles.iconoMenu} onClick={handleClick}></i>
        </div>
        {buttonActive === true && (
          <ul className={Styles.menuDesplegable}>
            <div className={Styles.contenedorDeLi}>

              <li>
                <Link className={Styles.links} to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className={Styles.links} to="/Nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className={Styles.links} to="/Contactanos">
                  Contactanos
                </Link>
              </li>

              </div>
          </ul>
        )}
      </div>
      ) : 
       <div className= {Styles.barraNavegacion}> 
        <div className={Styles.contenedorDivs}>
        <img src={Logo} alt="Logo" />
         
         <div className={Styles.contenedorLinks}>
         <Link to="/" className={Styles.linkss}>Inicio</Link>
         <Link to="/Nosotros" className={Styles.linkss}>Nosotros</Link>
         <Link to="/Contactanos" className={Styles.linkss}> Contactanos </Link>
          </div> 
          
         </div>
                                 
       
          
       </div>
      }
    </div>
  );
};

export default MenuHamburguesa;
