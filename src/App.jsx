import VerticalNavbar from './components/VerticalNavbar'
import Navbar from './pages/Navbar'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <Navbar />
      <div className="flex">
        <VerticalNavbar />
        <Projects />
      </div>
    </>
  )
}

export default App
