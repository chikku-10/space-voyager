
import './App.css'
import CollidingWalls from './Components/collidingWalls'
import Space from './Components/space'
import SpaceShip from './Components/spaceShip'

function App() {
  return (
    <>
      <Space>
        <CollidingWalls/>
         <SpaceShip/> 
      </Space>
    </>
  )
}

export default App
