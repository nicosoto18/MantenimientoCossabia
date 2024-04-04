import Style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={Style.contenedorFooter}>
      <div className={Style.contenedorPrincipal}>
        <div className={Style.titulo}>
          <h4>MANTENIMIENTO COSSBIA</h4>
        </div>
        <div className={Style.contenedorIconos}>
          <div className={`${Style.icono} rounded-circle`}>
            <a href="tel: +5493541641390">
            <i class="bi bi-telephone"></i>
            </a>
          </div>
          <div className={`${Style.icono} rounded-circle`}>
            <a href="https://www.facebook.com/profile.php?id=61557917496006">
              <i class="bi bi-facebook"></i>
            </a>
          </div>
          <div className={`${Style.icono} rounded-circle`}>
            <i class="bi bi-instagram"></i>
          </div>
        </div>
        <p>
          Nuestros servicios se encuentran disponibles en la localidad de
          Cosquín, Santa Maria de Punilla y Bialet Masse, no dudes en
          contactarnos
        </p>

        <Link className={Style.contenedorLinks} to="/Nosotros">Sobre Nosotros</Link>
        <Link className={Style.contenedorLinks} to="/Contactanos">Contactanos</Link>

        <div className={Style.derechoReservadoFooter}>
          <p>
            Mantenimiento Cossabia. © 2024 . All rights reserved | Cosquín,
            Cordoba
          </p>
        </div>
      </div>
      <div className={Style.contenedorFijadoContacto}>
        <a href="https://api.whatsapp.com/send?phone=3541641390">
          <i class="bi bi-whatsapp rounded-circle"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
