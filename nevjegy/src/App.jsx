import './App.css'
import Header from './Komponens/Header.jsx'
import Footer from './Komponens/Footer.jsx'
import Keszsegek from './Komponens/Keszsegek.jsx'
import Nevjegy from './Komponens/Nevjegy.jsx'

function App() {


  return (
    <>
      <h1>Nevjegykartyam:</h1>
      <Header />
      <Nevjegy />
      <Keszsegek />
      <Footer />
    </>
  )
}

export default App
