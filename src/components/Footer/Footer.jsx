import Style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={Style.contenedorFooter}>
      <div className={Style.contenedorPrincipal}>
        <div className={Style.titulo}>
          <h4>MANTENIMIENTO COSSABIA</h4>
        </div>
        <div className={Style.contenedorIconos}>
          <div className={`${Style.icono} rounded-circle`}>
            <i class="bi bi-telephone"></i>
          </div>
          <div className={`${Style.icono} rounded-circle`}>
          <i class="bi bi-facebook"></i>
          </div>
          <div className={`${Style.icono} rounded-circle`}>
          <i class="bi bi-instagram"></i>
          </div>
        </div>
        <p>
            Nuestros servicios se encuentran disponibles en la localidad de Cosquín, Santa Maria
            de Punilla y Bialet Masse, no dudes en contactarnos
        </p>
        
        <Link className={Style.contenedorLinks}>Sobre Nosotros</Link>
        <Link className={Style.contenedorLinks}>Contactanos</Link>

        <div className={Style.derechoReservadoFooter}>
          <p>Mantenimiento Cossabia. © 2024 . All rights reserved | Cosquín, Cordoba</p>
        </div>
      </div>
      <div className={Style.contenedorFijadoContacto}>
        <a href="https://api.whatsapp.com/send?phone=3541641390"><i class="bi bi-whatsapp rounded-circle"></i></a>
        </div>
    </div>
  );
};

export default Footer;
