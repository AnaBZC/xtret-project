//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ResponsiveAppBar from './components/Nav-bar'
import Card from './components/card-with-image'
import './App.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ResponsiveAppBar />

        <Card
          title="Sudadera Streetwear"
          description="Estilo urbano con esencia racing. ¡Personalízala a tu gusto!"
          image="https://unsplash.it/1040/600"
          buttonText="Comprar ahora"
        />
      </div>

    </>
  )
}

export default App
