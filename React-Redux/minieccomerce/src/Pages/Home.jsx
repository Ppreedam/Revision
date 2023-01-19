import React from 'react'
import Crousel from '../Components/Crousel'
// import "../Components/Crousel.css"
import MultiCrousel from '../Components/MultiCrousel'
import Footer from './Footer'


const Home = () => {
  
  return (

<>


    <div className='box'>

      <Crousel/>
      <h1 style={{ margintop: "40px" }}>Deal Of The Day</h1>

      {/* <MultiCrousel /> */}
      <Footer />
    </div>
    
    </>
  )
}

export default Home