
import { useState } from 'react';
import './App.css'
import SpaceShip from './Components/SpaceShip'
import CollidingWalls from './Components/collidingWalls'
import Space from './Components/space'

function App() {

  const [stopTheGame, setStopTheGame] = useState(false);
  
  return (
    <>
      <Space stopTheGame={stopTheGame} setStopTheGame={setStopTheGame}>
        <CollidingWalls stopTheGame={stopTheGame} setStopTheGame={setStopTheGame}/>
         <SpaceShip stopTheGame={stopTheGame} setStopTheGame={setStopTheGame} /> 
      </Space>
      <button onClick={() => setStopTheGame(prevState => !prevState)}>Pause the Game</button>
    </>
  )
}

export default App
