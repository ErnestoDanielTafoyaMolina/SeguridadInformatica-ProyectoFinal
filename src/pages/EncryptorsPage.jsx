import { EncryptorsList } from '../components';
import {  encryptors  } from '../data';


import '../styles/encryptors.css'
export const EncryptorsPage = () => {
  return (
    <>
        <h2>Aplicaciones de software cifrado</h2>
        <hr />
        <div className="encryptors">
        {
          encryptors.map( encryptor => 
            <EncryptorsList 
              key={ encryptor.id }
              name={ encryptor.name }
              description={ encryptor.description }
              url={ encryptor.url }
              img={ encryptor.img }
            />
          )
        }
        </div>
    </>
  )
}
