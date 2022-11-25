import React from 'react'
import { CryptoConceptsList } from '../components/CryptoConceptsList';
import { concepts } from '../data';

export const CryptoConceptsPage = () => {
  return (
    <>
        <h2>Conceptos de criptografía</h2>
        <hr />  
        {
          concepts.map( concept => (
            <CryptoConceptsList
              key={ concept.id } 
              name={ concept.name }
              description={ concept.definition }
              examples={ concept.examples } 
              />
          ) )
        }
    </>
  )
}
