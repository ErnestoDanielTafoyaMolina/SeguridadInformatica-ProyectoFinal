import React from 'react'
import { NormsStandardsList } from '../components/NormsStandardsList';
import { NormStandards } from '../data';
export const NormsStandarsPage = () => {
  return (
    <>
        <h2>Normas y estandares.</h2>
        <hr />

        <div className="mt-2">
          { 
            NormStandards.map(normStandar=>
               <NormsStandardsList
                  key={ normStandar.id }
                  name={ normStandar.name }
                  description={ normStandar.description }
               /> )
          }
        </div>
    </>
  )
}
