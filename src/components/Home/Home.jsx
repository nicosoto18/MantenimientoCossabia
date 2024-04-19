import MenuHamburguesa from "../MenusNavegacion/MenuHamburguesa";
import Style from "./Home.module.css";
import MantGral from "../../Fotos/MantenimientoGral.jpg";
import ServHerreria from "../../Fotos/Herreria.jpg";
import Carpinteria from "../../Fotos/Carpinteria.jpg";
import Pintura from "../../Fotos/Pintura.jpg";
import Plomeria from "../../Fotos/Plomeria.jpg";
import Constructor from "../../Fotos/FotoAnimada.png";

import { useEffect, useRef } from "react";

const Home = () => {
  const componenteRef = useRef(null);
  useEffect(() => {
    if (componenteRef.current) {
      componenteRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div className={Style.contenedorPrincipal} ref={componenteRef}>
      <section>
        <div className={`${Style.contTituloPrincipal} container`}>
          <div className="row">
            <div className={`${Style.linea} col-1`}></div>
            <div className="col-11 col-md-10">
              <h1> ¿Necesitás reparar o remodelar algo en tu hogar?</h1>
            </div>
            <h2>Servicios seguros para tu empresa o hogar</h2>
            <h3>Contrata soluciones de mantenimiento integral para hogares</h3>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.contTitulo2}>
          <div className={Style.cuadrado}></div>
          <div className={Style.textServicio}>
            <h3>Que podemos hacer por vos?</h3>
            <h2>Nuestros servicios</h2>
          </div>
        </div>

        <div className={`${Style.contenedorDeServicios} row mt-5`}>
          <div className={`${Style.contTipoServicio} col-11 col-md-5`}>
            <h3>Mantenimiento en general</h3>
            <div className={Style.lineaSeparadora}></div>
            <img src={MantGral} alt="photoCocina" />
            <div>
              <h6>
                Arreglo de percianas, cambio de cerraduras, reparacion de
                muebles, corte de césped, mantenimiento de jardines,etc
              </h6>
            </div>
          </div>

          <div className={`${Style.contTipoServicio} col-11 col-md-5`}>
            <h3>Servicio de Herrería</h3>
            <div className={Style.lineaSeparadora}></div>
            <img src={ServHerreria} alt="photoHerreria" />
            <div>
              <h6>
                Instalacion de rejas, fabricacion de puertas y portones,
                reparacion de estructuras metálicas, diseño y construccion de
                barandas, etc
              </h6>
            </div>
          </div>

          <div className={`${Style.contTipoServicio} col-11 col-md-5`}>
            <h3>Servicio de Pintura</h3>
            <div className={Style.lineaSeparadora}></div>
            <img src={Pintura} alt="photoPintura" />
            <div>
              <h6>
                Pintura interior y exterior, reparacion de superficies,
                aplicacion de pintura decorativa, restauracion de fachadas
              </h6>
            </div>
          </div>

          <div className={`${Style.contTipoServicio} col-11 col-md-5`}>
            <h3>Servicio de Carpinteria</h3>
            <div className={Style.lineaSeparadora}></div>
            <img src={Carpinteria} alt="photoCarpinteria" />
            <div>
              <h6>
                Diseño y fabricación de muebles a medida, reparacion y
                restauracion de mobiliario para el hogar, etc
              </h6>
            </div>
          </div>

          <div className={`${Style.contTipoServicio} col-11 col-md-5 `}>
            <h3>Servicio de Plomeria</h3>
            <div className={Style.lineaSeparadora}></div>
            <img src={Plomeria} alt="photoPlomeria" />
            <div>
              <h6>
                Reparacion de fugas de agua, instalacion y reparacion de grifos
                y sanitarios, destape de cañerias, instalacion de sistemas de
                agua caliente, reparacion de filtraciones, mantenimiento de
                sistemas de alcantarillado,etc
              </h6>
            </div>
              </div>
       
            <div className={`${Style.contTenedorConstructor} col-11 col-md-5`}>
              <h3>Presupuesto gratis</h3>
              <div className={Style.lineaSeparadora}></div>
              <div className={Style.contenedorImgFondo}>
              <img
                src={Constructor}
                alt="photoPlomeria"
                />
                </div>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
