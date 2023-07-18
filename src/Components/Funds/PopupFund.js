import React from 'react'
import { Link } from 'react-router-dom'

const PopupFund = props => {
    return (
        <div className="popup-box">
            <div className="box">
                {props.content}
                
                <button className='btn-popup' onClick={props.handleClose}>Go Back</button>
                
            </div>
        </div>
    )
}

export default PopupFund
