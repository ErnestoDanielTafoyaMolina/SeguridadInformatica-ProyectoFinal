import React from 'react'
import { IntegrityList } from '../components/IntegrityList'
import { info } from '../data'
export const InformationIntegrityPage = () => {
  return (
    <>
        <h2>Integridad de la información</h2>
        <hr />
        <div className="information">
          { 
            info.map( inf => 
              <IntegrityList
                key={ inf.id }
                name={ inf.name }
                description={ inf.description }
              />
              )
          }
        </div>
    </>
  )
}
