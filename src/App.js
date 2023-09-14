import React from 'react'
import { Route , Routes }  from 'react-router-dom';
import HomePage from './pages/Home';
import RoomPage from './pages/Room';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>
    </Routes>
  )
}

export default App