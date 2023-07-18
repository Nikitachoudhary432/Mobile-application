import React, { useEffect, useState } from "react";
import { query, collection, orderBy, onSnapshot, limit, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { Link } from "react-router-dom";

const Index = () => {
    const [message, setMessage] = useState([]);
    const [user] = useAuthState(auth);
    console.log('u', user)
    console.log('u message', message)

    useEffect(() => {
        const q = query(
            collection(db, "message"),
            // collection(db, `${user.uid}`),
            orderBy("createdAt"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let message = [];
            QuerySnapshot.forEach((doc) => {
                message.push({ ...doc.data(), id: doc.id });
            });
            setMessage(message);
        });
        return () => unsubscribe;
    }, [user]);

    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                <div className="content">
                    {message?.map((message) => (
                        <Message key={message.id} message={message}/>
                    ))}
                </div>
            </div>
            <SendMessage />
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
        </main>
    )
}

export default Index

