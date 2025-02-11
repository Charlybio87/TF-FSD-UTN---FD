import React from 'react'
import { Footer, Header, Main } from '../../Components/Home'
import '../../style/css/header.css'
import '../../style/css/main.css'
import '../../style/css/footer.css'
import '../../style/css/header-main.css'

const Home = () => {
  return (
    <div className="container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home