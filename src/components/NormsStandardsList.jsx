import React from 'react'
export const NormsStandardsList = ({
  name,
  description
}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <b>¿Qué es?</b>
          <p className="card-text">
            { description }
          </p>
        </div>
      </div>
    </>
  )
}
