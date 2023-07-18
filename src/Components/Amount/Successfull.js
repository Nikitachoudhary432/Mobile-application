import React from 'react'
import { Link , useNavigate} from 'react-router-dom'

const Successfull = (props) => {
  const navigate = useNavigate();
  const handleCloseOk = (e) => {
    e.preventDefault();
    props.handleClose()
    navigate('/utility');
  }
  return (
    <div className="popup-box">
    <div className="box">
        {props.content}
        <button className='btn-popup' onClick={handleCloseOk}>Ok</button>
    </div>
</div>
  )
}

export default Successfull
