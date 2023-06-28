
import './App.css'
import Controlado from './components/Controlados'
import NoControlado from './components/NoControlado'

function App() {
 

  return (
    <div className='container'>
      <h1>formularios no controlados</h1>
    <NoControlado/>
        <h1>formularios controlado</h1>
    <Controlado/>
    <br />
    </div>
  )
}

export default App
