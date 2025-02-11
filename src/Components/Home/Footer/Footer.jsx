import React from 'react'
import logo from '../../../img/lg-footer-la-escuela-de-baristas-ok.png'

const Footer = () => {
  return (
    <footer>
      <div className='box-footer'>
        <div className='box-footer-suscrib'>
          <div className='suscrib_info'>
            <h5>
              <span>Mantente informado de todas las novedades de La Escuela de Baristas
              </span>
            </h5>
            <h6>
              <span>Suscríbete a la newsletter de La Escuela de Baristas para informarte de los nuevos cursos y próximos talleres de formación para Baristas. Tus datos personales serán utilizados tal y como se describe en nuestra <a href="/politica-de-privacidad">Política de privacidad</a>.
              </span>
            </h6>
          </div>
          <form action="" className='box-form-suscrib'>
            <div className='question-segurity'>
              <label>
                <span>
                  Pregunta de seguridad ¿2x3?
                </span>
                <input type="text" autoComplete='off' aria-required='true' aria-invalid='false' />
              </label>
              <input type="hidden" name="" />
            </div>
            <div className='box-mail-suscrib'>
              <p className='box-mail-text'>
                <input type="email" name="your-mail" id="" aria-required='true' aria-invalid='false' placeholder='Email'/>
              </p>
              <p className='box-mail-button'>
                <input type="submit" value="SUSCRIBIR" />
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className='separador'>
        <hr className='border'/>
      </div>
      <div className='box-footer-info'>
        <div className='box-footer-info-left'>
          <img src={logo} alt="1" />
          <p>
          Primer centro de formación de Baristas de Navarra con titulación oficial SCA. Somos especialistas en asesorar, formar y guiar a los profesionales de la hostelería en las nuevas tendencias del café.
          </p>
        </div>
        <div className='box-footer-info-right'>
          <ul className='box-footer-info-right_info'>
            <li><span>¿Qué necesitas?</span></li>
            <li><a href="">
            Formación SCA</a></li>
            <li><a href="">Formaciones y talleres</a></li>
            <li><a href="">Formación personalizada</a></li>
            <li><a href="">Alquiler Aula EB</a></li>
            <li><a href="">Preguntas frecuentes</a></li>
          </ul>
          <div className='box-footer-info-right_contacto'>
            <div className='box-footer-info-right_contacto_titulo'>
              <h5><span>Contacto</span></h5>
            </div>
            <div>
              <p>
                Pol. Ind. Landaben C/C · Nave 12
                <br/>
                31012 Pamplona
                <br />
                Navarra
              </p>
            </div>
            <div>
              <p>
                <a href="">662 433 064</a>
                <br />
                <a href="">cursos@laescueladebaristas.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='separador'>
        <hr className='border'/>
      </div>
      <div className='box-footer-creditos'>
        <p className='box-footer-creditos-info'>
          <span>La Escuela de Baristas © 2024</span> |
          <a href=""> Aviso legal</a>  | 
          <a href=""> Política de cookies</a>  | 
          <a href=""> Política de privacidad</a>  | 
          <a href=""> Condiciones de venta</a> · Creado por  
          <a href=""> Garlic & Waters</a>
        </p>
        <div className='icons-social'>
          <a href="">you</a>
          <a href="">IG</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer