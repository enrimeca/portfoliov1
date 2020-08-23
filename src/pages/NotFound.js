import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/pages/NotFound.scss'

function NotFound() {
  return (
      <Fragment>
        <div className="notfound">
            <h1>Ooops!!</h1>
              <h2>Error 404 - No se encuentra esta página</h2>        
            <Link className="btn btn-primary" to="/">Ir al Inicio</Link>
        </div>
      </Fragment>           
  )
}

export default NotFound
