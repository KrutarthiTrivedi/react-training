// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import './index.css'
// import './components/Netflix.css'
import './components/Netflix.module.css'
import NetfilxSeries from './components/NetflixSeries';
// import NetfilxSeries,{ FooterComponent, HeaderComponent} from './components/NetflixSeries';
function App() {
  

  return (
    <section className="container">
      <h1 className='card-heading'>List of netflix serices</h1>
    {/* <HeaderComponent /> */}
     <NetfilxSeries />
     {/* <FooterComponent /> */}
    </section>
  )
}


export default App
