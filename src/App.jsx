import { Outlet } from 'react-router-dom'
import './App.css'
import { Items } from './Components/Items'
import { ExampleNavbarOne } from './Components/Nav/Navbar'
import Slide from './Components/Nav/Slide'

function App() {

  return (
  

    <div>
    <ExampleNavbarOne/>
    <Outlet/>
    </div>


  )
}

export default App
