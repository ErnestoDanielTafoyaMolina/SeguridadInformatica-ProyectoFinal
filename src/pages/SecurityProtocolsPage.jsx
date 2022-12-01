import React from 'react'
import { SecurityProtocolsList } from '../components/SecurityProtocolsList'
import { protocols } from '../data'
export const SecurityProtocolsPage = () => {
  return (
    <>
        <h2>Protocolos de seguridad</h2>
        <hr />
        <div className="protocols">
          {
            protocols.map( protocol => 
              <SecurityProtocolsList 
                key={ protocol.id }
                name={ protocol.name }
                description={ protocol.description }
                /> )
          }
        </div>
    </>
  )
}
