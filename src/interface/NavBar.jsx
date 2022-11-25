
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                JP Learning
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav w-100 order-3 d-flex justify-content-end">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/term-conds"
                    >
                        Aviso de Privacidad y Confidencialidad
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/disclaimer"
                    >
                        Deslinde de Responsabilidad legal para uso de software
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/encryptors"
                    >
                        Encriptadores
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/norms-standards"
                    >
                        Normas y estándares
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/crypto-concepts"
                    >
                        Conceptos de criptografía
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/security-protocols"
                    >
                        Protocolos de seguridad
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/info-integrity"
                    >
                        Integridad de la información
                    </NavLink>

                </div>
            </div>
        </nav>
    </>
  )
}
