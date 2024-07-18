import React from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'

export const ListaMensajes = ({mensajes}) => {
  return (
    <div className='mensaje'>
      {mensajes.map((mensajes) => 
        <Mensaje informacion={mensajes}/>
      )}
    </div>
  )
}
