import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='main-cls '>
      <div className='Welcome pt-100 '>
        <div className='container'>
          <div className='Balance-Card'>
            <img src='./card1.png' />
            <h4>Balance</h4>
            <h1>$ 2425,25</h1>

            <Link to="/funds">
              <div className='fund'>
                <h3>Add fund</h3>
              </div>
            </Link>
          </div>

          <div className='Transaction'>
            <h3>Transaction</h3>

            <div className='card-D'>
              <div className='card1'>
                <div className='detail'>
                  <h1>Fund ID</h1>
                  <p>5efde2sdef5e6e8</p>
                </div>
                <div className='detail1'>
                  <h1>₹ 745.45</h1>
                  <p>Mon, 02 Aug, 2021</p>
                </div>
              </div>
              <div className='card2'>
                <div className='detail2'>
                  <h1>Debit</h1>
                  <p>Request type</p>
                </div>
                <div className='detail3'>
                  <h1>Bank</h1>
                  <p>Withdrawal Mode</p>
                </div>
              </div>
              <div className='button'>
                <div className='img-btn'>
                  <img src='./Cross.png' />
                </div>
                <h1>Declined</h1>
              </div>
            </div>
            <div className='card-S'>
              <div className='card1'>
                <div className='detail'>
                  <h1>Fund ID</h1>
                  <p>5efde2sdef5e6e8</p>
                </div>
                <div className='detail5'>
                  <h1>₹ 745.45</h1>
                  <p>Mon, 02 Aug, 2021</p>
                </div>
              </div>
              <div className='card2'>
                <div className='detail2'>
                  <h1>Debit</h1>
                  <p>Request type</p>
                </div>
                <div className='detail3'>
                  <h1>Bank</h1>
                  <p>Withdrawal Mode</p>
                </div>
              </div>
              <div className='button5'>
                <div className='img-btn'>
                  <img src='./Vector.png' />
                </div>
                <h1>Success</h1>
              </div>
            </div>
            <div className='card-D'>
              <div className='card1'>
                <div className='detail'>
                  <h1>Fund ID</h1>
                  <p>5efde2sdef5e6e8</p>
                </div>
                <div className='detail1'>
                  <h1>₹ 800</h1>
                  <p>Mon, 02 Aug, 2021</p>
                </div>
              </div>
              <div className='card2'>
                <div className='detail2'>
                  <h1>Debit</h1>
                  <p>Request type</p>
                </div>
                <div className='detail3'>
                  <h1>Bank</h1>
                  <p>Withdrawal Mode</p>
                </div>
              </div>
              <div className='button'>
              <div className='img-btn'>
                <img src='./Cross.png' />
                </div>
                  <h1>Declined</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='menu-bar'>
          <div className='active'>
            <i className="fa fa-home active" aria-hidden="true"></i>
            <p className='active'>Home</p>
          </div>
          <Link to='/utility'>
            <div>
              <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
              <p>Utility Bills</p>
            </div>
          </Link>
          <Link to='/transaction'>
            <div>
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <p>Transactions</p>
            </div>
          </Link>
          <Link to='/notification'>
            <div>
              <i className="fa fa-bell-o" aria-hidden="true"></i>
              <p>Notifications</p>
            </div>
          </Link>
          <Link to='/support'>
            <div>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <p>Support</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index

