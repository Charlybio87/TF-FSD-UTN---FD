import React from 'react'
import ScrollNav from '../../../utils/ScrollNav/ScrollNav'
import { Link } from 'react-router-dom'
import MenuHamburguesa from '../../../hooks/MenuHamburguesa'
// import ScrollNav from '../../utils/ScrollNav/ScrollNav'

const Header = () => {
  const {scrolled} = ScrollNav()
  return (
    <>
      <header className={`box-container_header ${scrolled ? 'scrolled' : ''}`}>
        <div className='container_header_nav'>
          <div className= {`header_nav${scrolled ? '_scrolled' : ''}`}>
            <div className={`item-menu logo${scrolled ? '_scrolled' : ''}`}>
              <Link to={'/'}>
                <img src="https://laescueladebaristas.com/wp-content/uploads/2021/10/logo-la-escuela-de-baristas-ok.png" alt="logo" />
              </Link>
              <MenuHamburguesa/>
            </div>
            <nav className='nav_sup'>
              <ul className='nav_sup_ul'>
                <li className='menu-item-1'><a href="#">La Escuela</a></li>
                <li className='menu-item-2'>
                  <Link to={'/cursos'}>Cursos</Link>
                  <ul className='sub-menu-item'>
                    {/* <li><a href='#'>Cursos SCA</a></li>
                    <li><a href="#">Formaciones EB</a></li>
                    <li><a href="#">Workshops</a></li>
                    <li><a href="#">Formaciones Personalizadas</a></li> */}
                  </ul>
                </li>
                <li className='menu-item-3'><a href="#">Blog</a></li>
                <li className='menu-item-4'><a href="#">Contacto</a></li>
              </ul>
              <ul className='nav_sup_ul'>
                <li><a href="http://"></a>UX</li>
                <li><a href="http://"></a>CA</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header