import {useEffect, useState} from 'react'
import Personaje from './Personaje'

function NavPage(props){
  return (
    <header className="d-flex  justify-content-between align-items-center ">
      <p className="fw-bold ">Page: {props.page}</p>
      <button className="btn btn-primary btn-lg"
       onClick={()=> props.setPage(props.page +1)}
      >Page {props.page}</button>
    </header>
  )
}

function PersonajeList() {

  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(()=>{
    async function FechtData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setLoading(false)
      setPersonajes(data.results)
    }
    FechtData()
  },[page])

 

  return (
    <div className='container'>

      <NavPage page={page} setPage={setPage} />

      {
        loading ? <h1>Cargando...</h1> : 
        <div className="row">
          {
          personajes.map((personaje) => {
              return(
                  <div className='col-md-4 py-3' key={personaje.id}>
                    <Personaje personaje={personaje} />
                  </div>
              )
          })
          }
        </div>
      }
    </div>
  )
}

export default PersonajeList