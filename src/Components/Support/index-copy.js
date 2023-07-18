import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Index = () => {


  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => 
  {
    console.log('test')
    // if(localStorage.getItem('msg')) {
    //   const data = { message : localStorage.getItem('msg') }
    //   console.log(data)
    //   setMessageList(() => [ data])
    //   setMessage('')
    // }
    goToTop()
  }, []);


  const goToTop = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  console.log('messageList',typeof(messageList) )
  console.log('messageList', message)

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message)
    messageList.push(message);
    
    setTimeout(() => {
      localStorage.setItem('msg', setMessageList)
    }, 1000);
    if(message) {
      // setTimeout(() => {
      //   localStorage.setItem('msg', message)
      // }, 1000);
    }

  }




  return (
    <div className='Main'>
      <div className='SupportPage'>
        <div className='content'>
          <h1 className='chat'>Today, 10:23 am</h1>
          <div className="msg left-msg">
            <div className="msg-me">
              <div className="msg-text">
                <p>Lorem Ipsum is simply dummy text of the printing and  to be typesetting industry.</p>
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div className="msg-img">
              <img src='dr.png' />
            </div>
            <div className="msg-Text">
              <p>Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>

          <div className="msg left-msg ">
            <div className="msg-me">
              <div className="msg-text">
                <p>Thank you.</p>
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div className="msg-img">
              <img src='dr.png' />
            </div>
            <div className="msg-Text">
              <p>You most Welcome. Is there any more question so ask me.</p>
            </div>
          </div>

          <div className="msg left-msg ">
            <div className="msg-me">
              <div className="msg-text">
                <p>Yes! Ipsum has been the industry's standard dummy text.</p>
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div className="msg-img">
              <img src='dr.png' />
            </div>
            <div className="msg-Text">
              <p>Lorem Ipsum has been the industry's standard dummy text? the printing and  to be typesetting industry.</p>
            </div>
          </div>

          <div className="msg left-msg ">
            <div className="msg-me">
              <div className="msg-text">
                <p> The industry's standard dummy text is greatest in the London.</p>
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div className="msg-img">
              <img src='dr.png' />
            </div>
            <div className="msg-Text">
              <p>Yes! Right...</p>
            </div>
          </div>
          <div className="msg left-msg ">
            <div className="msg-me">
              <div className="msg-text">
                <p> The industry's standard dummy text is greatest in the London.</p>
              </div>
            </div>
          </div>
          <div className="msg left-msg ">
            <div className="msg-me">
              <div className="msg-text">
                <p> I hope you get my point.</p>
              </div>
            </div>
          </div>
          <div className="msg right-msg">
            <div className="msg-img">
              <img src='dr.png' />
            </div>
            <div className="msg-Text">
              <p>Yes! got the point</p>
            </div>
          </div>

          {
            messageList?.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <div className="msg left-msg ">
                      <div className="msg-me">
                        <div className="msg-text">
                          <p>{item.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
            )
          }

        </div>
        <div className='drop-bar'>
          <div className='icon'>
            <i className="fa fa-link" aria-hidden="true"></i>
          </div>
          <div className='input-value'>
            <input onChange={(e) => setMessage(e.target.value)} id="message" name={message} placeholder='Type Message'></input>
          </div>
          <div className='send-btn'>
            <button type="submit" className="msger-send-btn" onClick={sendMessage}>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className='menu-bar'>
        <Link to='/home'>
          <div>
            <i className="fa fa-home" aria-hidden="true"></i>
            <p>Home</p>
          </div>
        </Link>
        <Link to='/utility'>
          <div>
            <i className="fa fa-sticky-note-o " aria-hidden="true"></i>
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
        <div className='active'>
          <i className="fa fa-envelope-o active" aria-hidden="true"></i>
          <p className='active'>Support</p>
        </div>
      </div>
    </div>
  )
}

export default Index