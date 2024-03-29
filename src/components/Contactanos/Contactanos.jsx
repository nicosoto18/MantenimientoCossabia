import Styles from "./Contactanos.module.css";

const Contactanos = () => {
  return (
    <div className={Styles.contenedorPpal}>
      <section>
        <div className="container">
          <div className="row">
            <div className={Styles.contenedorTitulo}>
              <div className={`col-1 ${Styles.lineaNaranja}`}></div>
              <div>
                <h1>Póngase en contacto o solicite presupuesto</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.contenedorSubtitulo}>
          <h4>
            Si tenés una consulta, por favor completa el siguiente formulario
            que intentaremos responderte a la brevedad.
          </h4>
        </div>
      </section>

      <section>
        <div>
          <form action="" className={Styles.Formulario}>
            <input type="text" placeholder="Nombre" className={Styles.inputs} />
            <input type="text" placeholder="Email" className={Styles.inputs} />
            <input
              type="text"
              placeholder="Telefono"
              className={Styles.inputs}
            />
            <textarea
              name="consulta"
              id="consulta"
              cols="30"
              rows="10"
              className={Styles.TextareaForm}
              placeholder="Ingrese su consulta"
            ></textarea>
            
            <button className={Styles.btEnviarConsulta}>
                Envia tu consulta
            </button>
          </form>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={`row ${Styles.conenedorFormasContacto}`}>
            <div className={`col-md-5 col-sm-12y ${Styles.contenedorContacto}`}>
              <h4>Llamanos</h4>
              <div>
                <h5 className="mt-3">Estamos disponibles 24/7</h5>
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
