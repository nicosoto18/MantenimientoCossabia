import Styles from "./Nosotros.module.css"
import imgFondoAsesoramiento from "../../Fotos/FotoAsesoramiento.jpeg"
import { useEffect, useRef } from "react"

const Nosotros=()=>{

const componenteRef = useRef(null)

useEffect(()=>{

   if(componenteRef.current){
      componenteRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
   }

},[])

   return(
      <div>
         <section className={Styles.section1} ref={componenteRef}>
          <div className="container">
          <div className={`row ${Styles.contSection1}`}>

               <div className={`col-1 ${Styles.lineaNaranja}`}></div>
               <div className={`col-11 ${Styles.tituloPpal}`}>
                  <h1>Quienes somos?</h1>
               </div>
            </div>
          </div>
         </section>
     
         <section>
            <div className={Styles.DescripcionQuienesSomos}>
            <p>
            Somos una plataforma dedicada a ofrecer soluciones integrales para el hogar, la oficina
            y cualquier otro espacio de trabajo. Nos especializamos en la rápida y eficiente resolución 
            de todo tipo de desperfectos, desde los más pequeños hasta los proyectos más grandes de
             mantenimiento y reparación.
            </p>
            <p>
            Nuestra misión es conectar a las personas con las mejores opciones para resolver cualquier 
            problema en su entorno, mientras generamos empleo genuino e innovador en el mercado de los 
            oficios. Creemos en un mundo más conectado, donde la prestación de servicios de mantenimiento
             se profesionalice y aporte valor a los usuarios, construyendo vínculos sustentables, 
             cercanos y transparentes.
            </p>
            <p>
            Contamos con un equipo de profesionales expertos en cada rubro, listos para brindar 
            soluciones rápidas y efectivas.
            </p>
            <p>           
            En nuestro compromiso por satisfacer las necesidades de nuestros clientes, nos esforzamos 
            por ofrecer un servicio de calidad, puntualidad y atención personalizada. Estamos aquí 
            para hacer la vida más fácil, proporcionando soluciones confiables y duraderas para cada
             situación que se presente en su hogar u oficin
            </p>
            </div>
         </section>

         <section>
           <div className={`container ${Styles.contenedorAsesoramiento}`}>
            <div className={`row ${Styles.contSectionAsesoramiento} ${Styles.backgroundImage}`}>
               <div className={`col-1 ${Styles.lineaNaranja}`}></div>
               <div className={`col-12 ${Styles.tituloAsesoramiento}`}>
                  <h4>CONSULTE Y RECIBA ASESORAMIENTO Y PRESUPUESTO
                     GRATIS
                  </h4>
               </div>
                <div className="mt-4">
                  <h6>
                     Solucionamos desperfectos del hogar, asegurando el professionalismo y calidad
                  </h6> 
                </div>
                 <div className="mt-4">
                  <h5>
                     TE ATENDEMOS AL INSTANTE
                  </h5>
                  <h4>3541641390</h4>
                 </div>
            </div>
          </div>
         </section>
         
         <div className={Styles.contenedorBoton}>
            <button className={Styles.BtComunicate}>Comunicate con nosotros</button>
         </div>
         

      </div>
   )
}

export default Nosotros;