import Nav from './Nav.jsx'
import { useEffect, useState } from "react"
import axios from "axios"


function ListaPosiciones() {

    const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net"

    const [lista, setLista] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/api/jobs/get-list`)
    .then(response => {
      setLista(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])



  return (
    <>
      <div className="container mt-5">
      <h5 className="text-center text-info">Step 3 — Obtener la lista de posiciones abiertas</h5>

      {lista.length > 0 ? (
        <ul className="list-group">
          {lista.map((item) => (
            <li key={item.id} className="list-group-item">
              <strong>{item.id} | {item.title}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando o sin información</p>
      )}
    </div>
    </>
  )
}

export default ListaPosiciones
