
import Nav from './Nav.jsx'
import ObtenerDatos from './ObtenerDatos.jsx'
import ListaPosiciones from './ListaPosiciones.jsx'
import DatosInput from './DatosInput.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
function App() {

  return (
    <>
        <Nav />
        <div className="container mt-3 mb-5">
          <h3 className='text-center text-primary mt-3'>Challenge Nimble Gravity</h3>
          <div className="row">
              <div className="col-sm">
                    <ObtenerDatos />
              </div>
              <div className="col-sm">
                  <ListaPosiciones />
              </div>
            <div className="col-sm">
                  <DatosInput />
            </div>
        </div>
        </div>   
    </>
  )
}

export default App
