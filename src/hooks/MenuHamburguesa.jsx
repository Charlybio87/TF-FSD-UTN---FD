import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuHamburguesa = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div>
        <button className='btn-menu' onClick={toggleMenu} style={styles.button}>
          {menuVisible ? 'X' : 'Abrir'}
        </button>
      </div>
      {menuVisible && (
        <div  className='ul-menu'>
          <ul  style={styles.menu}>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/cursos'}>Cursos</Link></li>
            <li><Link to={'/new'}>Nuevos Productos</Link></li>
            <li>Contato</li>
          </ul>
        </div>
      )}
    </>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  menu: {
    listStyleType: 'none',
    padding: 20,
    margin: 0,
    marginTop: '10px',
  },
};

export default MenuHamburguesa;