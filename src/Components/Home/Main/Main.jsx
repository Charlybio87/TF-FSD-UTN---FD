import React from 'react'
import slider1 from '../../../img/Slider-1-la-escuela-de-baristas.jpg'
import Sponsors from './Sponsors'
import img_coffe1 from '../../../img/home-1-la-escuela-de-baristas-1.png'
import img_coffe2 from '../../../img/home-2-la-escuela-de-baristas.png'

const Main = () => {
  return (
    <>
      <main className='box-container_main'>
        <article className='article-carrusel'>
          <img src={slider1} alt="1" />
          {/* <img src={slider1} alt="2" />
          <img src={slider1} alt="3" />
          <img src={slider1} alt="4" />
          <img src={slider1} alt="5" /> */}
        </article>
        <article className='article-info'>
          <div className='container-main'>
            <div className='main-info'>
              <div className='main-info-text-1'>
                <h2>Fórmate como Barista profesional</h2>
                <p>Los cursos y talleres de formación de La Escuela de Baristas proponen una formación práctica profesional y muy específica, centrada en el conocimiento profundo del café y su preparación.</p>
                <ul>
                  <li>
                    <a href="http://">Certificación oficial de la Specialty Coffee Association</a>
                  </li>
                  <li>
                    <a href="http://">Certificación oficial de la Specialty Coffee Association</a>
                  </li>
                  <li>
                    <a href="http://">Talleres personalizados para profesionales de la hostelería</a>
                  </li>
                </ul>
              </div>
              <div className='main-info-img'>
                <img src={img_coffe1} alt="1" />
              </div>
            </div>
            <div className='main-info main-info-inf'>
              <div className='main-info-img'>
                <img src={img_coffe2} alt="2" />
              </div>
              <div className='main-info-text-1 main-info-p'>
                <h2>La Escuela de Baristas</h2>
                <p>Primer centro de formación de Baristas profesionales de Navarra</p>
                <p>Desde 2016, los profesionales de la hostelería navarra y aspirantes a Baristas han pasado por el <strong>Aula de La Escuela de Baristas</strong>, poniendo en práctica la filosofía y saber hacer de Amilka Lee, nuestro formador que, desde 2021, imparte los cursos oficiales de la <strong>Specialty Coffee Association</strong>.</p>
                <span><a href="">DESCUBRE EL AULA DE FORMACIÓN</a></span>
              </div>
            </div>
          </div>
        </article>
        <Sponsors/>
      </main>
    </>
  )
}

export default Main