import React, { useState } from 'react'
import Successfull from './Successfull';
import { useNavigate } from 'react-router-dom';


const Index = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState();

  const handleChange = (e) => {
    setChecked(e.target.value)

  }

  const togglePopup = () => {
    if (!checked) {
      alert('Select one')
    }
    else {
      setIsOpen(!isOpen);
    }

  }


  return (
    <div className='main'>
      <div className='container'>
        <div className='AmountPage'>
          <div className='backButton'>
            <button onClick={() => navigate(-1)}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <h2>Amount</h2>
          </div>
          <div className='amount'>
            <p>Enter Amount</p>
            <div class="form-input">
                <i class="fa fa-usd" aria-hidden="true"></i>
                <input type='number' name='amount' placeholder=' 0.00'></input>
            </div>
          </div>
          <div className='line'>
            <div style={{ flex: 1, height: '2px', backgroundColor: '#E7E4E4' }} />
          </div>
          <div className='Card-Group' onChange={handleChange} >
            <div className='CARD'>
              <div className='text'>
                <h1>Net Banking</h1>
                <p>10 min - 5 hours</p>
              </div>
              <div className='checkbox' >
                <input type="radio" name="radio" id='1' readOnly />
                <label for='1'>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            <div className='CARD'>
              <div className='text'>
                <h1>UPI Transfer</h1>
                <p>10 min - 5 hours</p>
              </div>
              <div className='checkbox'>
                <input type="radio" name="radio" id='2' />
                <label for='2'>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            <div className='CARD'>
              <div className='text'>
                <h1>IMPS</h1>
                <p>Upto 10 minutes</p>
              </div>
              <div className='checkbox'>
                <input type="radio" name="radio" id='3' />
                <label for='3'>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            <div className='CARD'>
              <div className='text'>
                <h1>Debit Cards</h1>
                <p>Instantly</p>
              </div>
              <div className='checkbox'>
                <input type="radio" name="radio" id='4' />
                <label for='4'>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            <div className='CARD' >
              <div className='text'>
                <h1>New PayTM</h1>
                <p>Upto 10 minutes</p>
              </div>
              <div className='checkbox'>
                <input type="radio" name="radio" id='5' />
                <label for='5'>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <button className='btn-btn' onClick={togglePopup}>Pay Now</button>{isOpen &&
          <Successfull
            content={
              <>
                <div className='circle'>
                  <img src='./success.png' />
                </div>
                <h1>Successfull!</h1>
                <p>Add fund successfully completed, you can check now.</p>
                {/* <Link to="/home">
                <div>
                            <button className='btn-popup'>Ok</button>
                            </div>
                </Link> */}
              </>}
            handleClose={togglePopup}
          />}
      </div>
    </div>
  )
}

export default Index
