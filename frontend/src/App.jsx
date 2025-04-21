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
        <section id='hero-section'>
          <HeroComponent />
        </section>
        <section id='about-section'>
          <AboutComponent />
        </section>
        <section id='product-section'>
          <ProductComponent />
        </section>
        <section id='contact-section'>
          <ContactComponent />
        </section>


      </div>

    </>
  )
}

export default App
