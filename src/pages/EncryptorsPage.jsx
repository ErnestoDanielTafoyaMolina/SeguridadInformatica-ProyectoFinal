import {  encryptors  } from '../data';

export const EncryptorsPage = () => {
  return (
    <>
        <h2>Aplicaciones de software cifrado</h2>
        <hr />
        <p>A continuacion, algunos encriptadores que puedes encontrar en la web
            para mantener tu información segura, los cuales son...
        </p>
        {
          encryptors.map(
            encryptor => ( <li>{ encryptor.name }</li> )
          )
        }
    </>
  )
}
