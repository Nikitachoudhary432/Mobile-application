import React from "react";
import { auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  // console.log('uid message', message)
  const [user] = useAuthState(auth);
  // console.log('user message', user)

  const Message = ({ message }) => {
  
    if (!user) {
      return null; // or render a loading indicator
    }
  };

  return (

    <div className={`msg ${message?.uid === user?.uid ? "right" : ""}`}>
      <div className="msg left-msg">
        <div className="msg-img">
          <img src='Vector.png' />
        </div>
        <div className="msg-text">
          <p className="user-message">{message.text}</p>
          {/* <p className="user-name">{message.name}</p> */}
        </div>
      </div>

      <div className="msg right-msg">
        <div className="msg-img">
          <img src='dr.png' />
        </div>
        <div className="msg-Text">
          <p className="user-message">Lorem5</p>
          {/* <p className="user-name">{message.name}</p> */}
        </div>
      </div>
    </div>

  );
};
export default Message;