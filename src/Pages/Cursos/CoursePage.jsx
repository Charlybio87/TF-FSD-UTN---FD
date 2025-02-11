import React from 'react'

const CoursePage = ({course}) => {
  // const image = '../../'+(course.img)  
  return (
    <>
    <div className="container-course">      
      <div className='container-coursePage'>
        <div className="row-coursePage">
          <div className="row-der">
            <h2>{course.nombre}</h2>
            <span>{course.precio}</span>
            <p>{course.descripcion}</p>
            <div className='info-curso'>
              <p>{course.duracion}</p>
              <p>{course.capaidad}</p>
              <p>{course.idioma}</p>
            </div>
            <p>Finaliza la compra para reservar tu plaza. Una vez completado el proceso, desde La Escuela de Baristas, nos pondremos en contacto contigo para confirmar tu inscripción y fijar la fecha de la formación.</p>
            <form>
              <label htmlFor="type_curso">Fecha</label>
              <select name="fecha" id="type_curso">
                <option value="">Elige una opción</option>
                <option value="personalizado">Personalizado</option>
              </select>
              <div className='counter-carrito'> - 1 +
              </div>
              <button type="submit"><span>Añadir al carrito</span></button>
            </form>
          </div>
        </div>
        <div className="row-coursePage">
          <img src={course.img} alt={course.nombre} className='styled-img'/>
        </div>
        {/* <h1>{course.nombre}</h1>
        <img src={course.img} alt={course.nombre} className='styled-img' />
        <p>{course.precio}</p>
        <p>{course.descripcion}</p>
        <p>{course.duracion}</p>
        <p>{course.capaidad}</p>
        <p>{course.idioma}</p> */}
        </div>
      </div>
    </>
  )
}

export default CoursePage