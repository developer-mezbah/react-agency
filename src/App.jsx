
import './App.css'
import { Banner } from './conponents/banner/Banner'
import Navbar from './conponents/navbar/Navbar'
import Projects from './conponents/projects/Projects'
import Services from './conponents/services/Services'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <Projects/>
    </>
  )
}

export default App
