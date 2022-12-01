import { Link } from "react-router-dom"


export const EncryptorsList = ({
  name,
  description,
  url
}) => {
  return (
    <>
      <div className="encryptors">
      <div className="card" style={{width: "20rem"}} >
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text">
            <b>¿Qué es?</b>
            <br />
            { description }
          </p>
          <p className="card-footer">
            <b>¿Quieres saber más o descargar el programa? entonces...</b>
            <br />
            <a href={ url } className="btn btn-primary" target="_blank">haz click quí</a>
          </p>
        </div>
      </div>
      </div>
    </>
  )
}
