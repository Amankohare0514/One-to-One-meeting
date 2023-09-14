import React, {useCallback,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css';
const HomePage = () => {
    const [value , setValue] = useState();
    const navigate = useNavigate()
    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`)
    }, [navigate , value])
  return (
    // <div classNameName='name'>
    //     <input  
    //     classNameName='input'
    //     value={value}
    //     onChange={(e)=> setValue(e.target.value)}
    //     type='text'
    //     placeholder='enter room id'/> <br/>
    //     <button onClick={handleJoinRoom}>join</button>
    // </div>
    <div className='name'>
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <input type="text" id="email" name="email" required="" value={value} 
          onChange={(e)=> setValue(e.target.value)}
          placeholder='Create room id'/> 
        </div> 
        <button 
        onClick={handleJoinRoom}
        className="form-submit-btn" type="submit">Create Room</button>
      </form>
    </div>
    </div>
  )
}

export default HomePage