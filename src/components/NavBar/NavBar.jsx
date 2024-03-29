import Styles from "./NavBar.module.css";
import Logo from "../../Fotos/Logo.png";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NavBar = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleClick = () => {
    setButtonActive(!buttonActive);
  };

  return (
    <div className={Styles.barraNavegacion}>
      <div className={Styles.contenedorDivs}>
        <img src={Logo} alt="Logo" />
        <i class="bi bi-list" id={Styles.iconoMenu} onClick={handleClick}></i>
      </div>
      {buttonActive === true && (
        <ul className={Styles.menuDesplegable}>
          <div className={Styles.contenedorDeLi}>
            <li>
              <Link className={Styles.links} to="/">Inicio</Link>
            </li>
            <li>
              <Link className={Styles.links} to="/Nosotros">Nosotros</Link>
            </li>
            <li>
              <Link className={Styles.links} to="/Contactanos">Contactanos</Link>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
