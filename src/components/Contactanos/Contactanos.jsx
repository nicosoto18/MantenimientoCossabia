import FormularioConsulta from "../FormularioConsulta/FormularioConsulta";
import Styles from "./Contactanos.module.css";
import { useEffect, useRef } from "react";

const Contactanos = () => {
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
    <div className={Styles.contenedorPpal} ref={componenteRef}>
      <section>
        <div className={Styles.lineaNaranja}></div>

        <div className={Styles.tituloPpal}>
          <h1>Póngase en contacto o solicite presupuesto</h1>
        </div>

        <div className={Styles.contenedorSubtitulo}>
          <h4>
            Si tenés una consulta, por favor completa el siguiente formulario
            que intentaremos responderte a la brevedad.
          </h4>
        </div>
      </section>

      <FormularioConsulta />

      <section>
        <div className="container">
          <div className={`row ${Styles.conenedorFormasContacto}`}>
            <div className={`col-md-5 col-sm-12y ${Styles.contenedorContacto}`}>
              <h4>Llamanos</h4>
              <div>
                <h5 className="mt-3">Estamos disponibles 24hs</h5>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <i class="bi bi-telephone-fill"></i>
                <h6 style={{ marginLeft: "8px" }}>3541330349</h6>
              </div>
            </div>
            <div className={`col-md-5 col-sm-12y ${Styles.contenedorContacto}`}>
              <h4>Mandamos un correo electrónico</h4>
              <div>
                <h5 className="mt-3">Te respondemos a la brevedad</h5>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <i class="bi bi-envelope"></i>
                <h6 style={{ marginLeft: "8px" }}>
                  Cossabiamantenimiento@gmail.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactanos;
