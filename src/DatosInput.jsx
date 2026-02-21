import { useEffect, useState } from "react"
import axios from "axios"

function DatosInput() {

  const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net"

  const uuid = "829fa5dd-e7f9-4a7c-9c06-16235f55b102"
  const candidateId = "74037202005"
  const  applicationId= "77701464005"

  const [lista, setLista] = useState([])
  const [repoUrls, setRepoUrls] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/api/jobs/get-list`)
      .then(response => {
        setLista(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

const handleChange = (jobId, value) => {
  setRepoUrls(prev => ({
    ...prev,
    [String(jobId)]: value
  }))
}
const handleApply = (jobId) => {

  if (!repoUrls[jobId]) {
    alert("Debes ingresar el link del repositorio")
    return
  }

  const body = {
    uuid,
    jobId,
    candidateId,
    repoUrl: repoUrls[jobId],
    applicationId
  }

  console.log("BODY ENVIADO:", body)

  axios.post(`${BASE_URL}/api/candidate/apply-to-job`, body, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    alert("Postulación enviada con éxito 🚀")
  })
  .catch(error => {
    console.log("ERROR COMPLETO:", error.response)
    alert("Error 400 - Revisar consola")
  })
}
  return (
    <div className="container mt-5">
      <h5 className="text-center text-info">
        Step 5 — Aplicar a una posición
      </h5>

      {lista.length > 0 ? (
        <ul className="list-group">
          {lista.map((item) => (
            <li key={item.id} className="list-group-item">
              <strong>{item.title}</strong>

             <input
                  type="text"
                  placeholder="https://github.com/tuusuario/turepo"
                  value={repoUrls[item.id] || ""}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                />

              <a
                className="btn btn-primary mt-2"
                onClick={() => handleApply(item.id)}
              >
                Postular
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando.</p>
      )}
    </div>
  )
}

export default DatosInput