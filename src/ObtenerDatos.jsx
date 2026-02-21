import Nav from './Nav.jsx'
import { useEffect, useState } from "react"
import axios from "axios"


function ObtenerDatos() {

  const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net"

  const email = "rodrigo.eduardo.correa.7@hotmail.com"

  const [candidate, setCandidate] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/api/candidate/get-by-email`, {
      params: { email }
    })
      .then(response => {
        setCandidate(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])



  return (
    <>
      <div className='container mt-5'>


        <div className="container mt-5">
          <h5 className='text-center text-info'>Step 2 — Obtener tus datos de candidato</h5>
          {candidate ? (
            <ul className="list-group">
              <li className="list-group-item">
                <strong>UUID:</strong> {candidate.uuid}
              </li>
              <li className="list-group-item">
                <strong>ID de candidato:</strong> {candidate.candidateId}
              </li>
              <li className="list-group-item">
                <strong>ID de aplicación:</strong> {candidate.applicationId}
              </li>
              <li className="list-group-item">
                <strong>Nombre:</strong> {candidate.firstName}
              </li>
              <li className="list-group-item">
                <strong>Apellido:</strong> {candidate.lastName}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {candidate.email}
              </li>
            </ul>
          ) : (
            <p>Cargando o sin información</p>
          )}


        </div>

      </div>
    </>
  )
}

export default ObtenerDatos
