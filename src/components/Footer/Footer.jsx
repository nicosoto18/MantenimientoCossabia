import Style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={Style.sectionFooter}>
      <div className={Style.contenedorFlexDFooter}>
        <section className={Style.sectionLocalidades}>
          <div className={Style.localidadesDeServicio}>
            <h4>LOCALIDADES DE SERVICIO</h4>
            <div className={Style.linea}></div>
            <p>
              Nuestros servicios se encuentran disponibles en la localidad de
              Cosquín, Santa Maria de Punilla y Bialet Massé
            </p>
          </div>
        </section>

        <section className={Style.sectionContactanos}>
          <div className={Style.Contactanos}>
            <h4>CONTACTANOS</h4>
            <div className={Style.linea}></div>
            <div className={`${Style.redSocial}`}>
              <i class="bi bi-instagram"></i>
              <a href="https/linkdeInstagram">@MantenimientoCossbia</a>
            </div>

            <div className={`${Style.redSocial} `}>
              <i class="bi bi-facebook"></i>
              <a href="https://www.facebook.com/profile.php?id=61557917496006">
                MantenimientoCossbia
              </a>
            </div>

            <div className={`${Style.redSocial}`}>
              <i class="bi bi-telephone"></i>
              <a href="tel: +5493541641390">3541641390</a>
            </div>
          </div>
        </section>

        <section className={Style.sectionSobreNosotros}>
          <div className={Style.SobreNosotros}>
            <h4>SOBRE NOSOTROS</h4>
            <div className={Style.linea}></div>
            <div className={Style.linksSobreNosotros}>
              <ul>
                <li>
                  {" "}
                  <Link to="/Nosotros" className={Style.linkPersonalizado}>
                    Investiga mas sobre nosotros{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/Contactanos" className={Style.linkPersonalizado}>
                    {" "}
                    Realiza tu consulta
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className={Style.allRightsReserved}>
        <p>
          Mantenimiento Cossbia © 2024. All rights reserved | Cosquín, Cordoba
        </p>
      </div>
      <div className={Style.contenedorFijadoContacto}>
        <a href="https://api.whatsapp.com/send?phone=3541641390">
          <i class="bi bi-whatsapp rounded-circle"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;
