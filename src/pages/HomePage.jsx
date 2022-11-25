import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
        <h2>Bienvenido a JP learning</h2>
        <hr />
        
        <p>
          Hola, se bienvenido a JP learning, donde puedes aprender Japonés de una manera dinamica y divertida.
          pero antes que todo, te invitamos a descubrir como trabajamos con la información que <b>TÚ</b> nos 
          has dado sobre ti mismo. 
        </p>
        <p>
          Puedes hacer click en la barra de navegacion de la pete de arriba para ver nuestros   <NavLink to="/term-conds"> Terminos y condiciones</NavLink> y de esa manera, te sientas más seguro de utilizar nuestro sistema.
        </p>
        <p>
          Por otro lado, también debes saber que nosotros no nos hacemos responsables de algunas cosas con tu información y podemos llegar a tomarnos ciertas libertades, por lo tanto, deberías conocer nuestra <NavLink to="/disclaimer">deslinde de responsabilidad</NavLink> para que de igual manera, sepas siempre como está tu información y donde puede llegar a encontrarse, sabiendo que <b>TÚ</b> has autorizado ese uso.
        </p>
        <p>
          Por ultimo, tambien puedes conocer algunos encriptadores que hay en la web en nuestra página especial para <NavLink to="/encryptors" >encriptadores </NavLink> te aseguramos que te va a gustar casa cosa que veas ahí y te será util para saber proteger tu información
        </p>

        <h5>Muchas gracias por usar JPLearning</h5>
    </>
  )
}
