import React, { useState } from 'react'
import PopupFund from './PopupFund';
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

const Index = () => {
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    

    const togglePopup = (e) => {
        // setIsOpen(!isOpen);
        // navigate("/home") 
        e.preventDefault();
        if (!phoneNumber || phoneNumber.length < 10) {
            alert('Enter 10 digit Number')
            setIsOpen(!isOpen);
        }
        else {
            navigate('/amount')
        }

    }
    return (
        <div className='mains'>
            <div className='Add-fund'>
                <div className='container'>
                    <div className='backButton'>
                        <button onClick={() => navigate(-1)}>
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                        <h1>Add Fund</h1>
                    </div>
                    <div className='circle-fund m-auto'>
                        <img src='./fund.png' />
                    </div>

                    <div className="Form-group">
                        <label htmlfor="">Mobile Number</label>
                        <div className='Phone'>
                            <PhoneInput
                                className="phoneInput"
                                Country='US'
                                placeholder="Enter mobile number"
                                value={phoneNumber}
                                onChange={setPhoneNumber} 
                                />
                            
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <button className='btn-btn' onClick={togglePopup}>Next</button>{isOpen && <PopupFund
                    content={
                        <>
                            <div className='circle'>
                                <img src='./ops.png' />
                            </div>
                            <h1>Ops!</h1>
                            <p>Please enter valid number to continiue add fund to your number.</p>
                            {/* <Link to="/funds"> */}
                            {/* <div>
                                    <button className='btn-popup'>Go Back</button>
                                </div> */}
                            {/* </Link> */}
                        </>}

                    handleClose={togglePopup}

                />}

            </div>
        </div>
    )
}

export default Index

