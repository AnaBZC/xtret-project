//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ResponsiveAppBar from './components/Nav-bar';
import HeroComponent from './components/hero-component';
import AboutComponent from './components/about-component';
import ProductComponent from './components/product-section';
import ContactComponent from './components/contact-component';

import './App.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ResponsiveAppBar />
        <HeroComponent/>
        <AboutComponent />
        <ProductComponent />
        <ContactComponent />
      </div>

    </>
  )
}

export default App
