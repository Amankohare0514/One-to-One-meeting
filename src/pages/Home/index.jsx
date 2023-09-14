import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css';
import {v4 as uuidv4} from 'uuid';
const HomePage = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate()
  console.log(uuidv4());
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${uuidv4()}`)
  }, [navigate, uuidv4()])
  return (
    <div className='name'>
      <div className="form-container">
        <div className="form">
          <div className="form-group">
            <input type="text" id="email" required value={uuidv4()}
              onChange={(e) => setValue(e.target.value)}
              />
            
          </div>
          <button
            onClick={handleJoinRoom}
            className="form-submit-btn" type="submit">Create Room
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage