import React from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'

export const ListaMensajes = ({mensajesChat}) => {
  return (
    <div className='mensaje'>
      {mensajesChat.map((mensaje) => 
        <Mensaje informacion={mensaje}/>
      )}
    </div>
  )
}
