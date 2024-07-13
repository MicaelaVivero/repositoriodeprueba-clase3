import React from 'react'
import { ColorCardl } from './Components/ColorCard'


const App = () => {
  const infoCard = {
      likes: 3,
      fecha: '1 hour',
      colores: ['#36BA48', '#36BA97', '#36BA86', '#36BA25']
  }


  return (
          <>
          <ColorCard
          info={infoCard}/>
          </>
  )
}

export default App