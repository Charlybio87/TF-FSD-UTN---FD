import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../../Components/Home'
import { useNavigate, useParams } from 'react-router-dom';
import jsonData from '../../../src/data/products.json'
import CoursePage from './CoursePage';

const Curses = () => {
  // console.log(jsonData)
  const cursos = []
  for(const tematica of jsonData){
    for(const curso of tematica.curses){
      cursos.push(curso)
    }
  }
  const { curse_nombre } = useParams();
  const [course, setCourse] = useState({});

  const producto_seleccionado = cursos.find( 
    curso => curso.nombre.toLowerCase().replaceAll(' ','_') === curse_nombre)

  useEffect(() => {
    setCourse(producto_seleccionado)
    }, [producto_seleccionado])
  
  return (
    <>
      <Header/>
      <main className='container-curses'>
        {course && <CoursePage course={course} />}
      </main>
      <Footer/>
    </>
  )
}

export default Curses