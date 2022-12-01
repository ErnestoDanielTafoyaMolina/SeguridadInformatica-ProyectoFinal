import React from 'react'

export const SecurityProtocolsList = ({
  name,
  description
}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <b>¿En qué consiste?</b>
          <p className="card-text">
            { description }
          </p>
        </div>
      </div>
    </>
  )
}
