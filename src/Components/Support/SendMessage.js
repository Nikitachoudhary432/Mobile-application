import React, { useState } from "react";
import { auth, db } from "../../firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "message"), {
      text: message,
      name: displayName,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      {/* <input
        value={message}
        placeholder="type message..."
        onChange={(e) => setMessage(e.target.value)}
      /> */}
      <div className='drop-bar'>
        <div className='icon'>
          <i className="fa fa-link" aria-hidden="true"></i>
        </div>
        <div className='input-value'>
          <input
            type="text"
            value={message}
            placeholder="type message..."
            onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className='send-btn'>
          <button type="submit" >
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {/* <button type="submit">Send</button> */}
    </form>
  );
};
export default SendMessage;