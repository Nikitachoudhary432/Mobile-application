import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useNavigate } from "react-router-dom";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import { auth } from '../../firebase'

const Index = ({ setOtpSent }) => {
    let navigate = useNavigate();
    const initialValue = { phone: "" };
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    // const [value, setValue] = useState()
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = (e) => {
        // const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        // auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        // .then((confirmationResult) => {
        //     if (confirmationResult) {
        //       setOtpSent(true);
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        e.preventDefault();
        if (!phoneNumber) {
            alert('phone number is required')

        }
        else {
            alert('phone number is verify successfully.')
            navigate("/otppage")
        }
    }

    return (
        <div className='main'>
            <div className='Loginpage'>
                <div className='container'>
                    <div className='icon-grey'>
                        <h1>.</h1>
                    </div>

                    <div className='Heading'>
                        <h1>Welcome</h1>
                        <p>Login into your account with your phone number.</p>
                    </div>

                    <div className="Form-group">
                        <label for="">Mobile Number</label>
                        <div className='Phone'>
                            <PhoneInput
                                className='phoneInput'
                                Country='US'
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <button className='btn-btn' onClick={handleSubmit}>Login</button>
            </div>

        </div>
    )
}

export default Index

// import React, { useState } from 'react'
// import Popup from './Popup';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import OTPInput, { ResendOTP } from "otp-input-react";
// // import firebase from "firebase/app";
// // import "firebase/auth";
// // import "firebase/firestore";
// // import { auth } from '../../firebase'

// const Index = () => {
//     let navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);

//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [otp, setOtp] = useState("");

//     const handleOtpChange = (e) => {
//         setOtp(e.target.value);
//     };

//     const togglePopup = (e) => {
//         // const credential = firebase.auth.PhoneAuthProvider.credential(phoneNumber, otp);
//         // auth.signInWithCredential(credential)
//         //     .then((result) => {
//         //         // User signed in successfully.
//         //         console.log(result.user);
//         //     })
//         //     .catch((error) => {
//         //         // Error occurred.
//         //         console.log(error);
//         //     });
//         e.preventDefault();
//         if (!otp || otp.length < 4) {
//             alert('Please Verify OTP')
//         } else {
//             setIsOpen(!isOpen);
//             // navigate("/home")
//         }
//     }


//     return (
//         <div className='main'>
//             <div className='Otppage'>
//                 <div className='container'>
//                     <div className='backButton'>
//                         <button onClick={() => navigate(-1)}>
//                             <i className="fa fa-arrow-left" aria-hidden="true"></i>
//                         </button>
//                     </div>
//                     <div className='verification'>
//                         <h1>Enter OTP</h1>
//                         <p>Enter One Time Password (otp) to enter the app.</p>
//                     </div>

//                     <div className="verification-code">
//                         <OTPInput
//                             value={otp}
//                             onChange={handleOtpChange}
//                             autoFocus
//                             OTPLength={4}
//                             minLength='4'
//                             otpType="number"
//                             disabled={false}
//                             secure
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <button className='btn-btn' onClick={togglePopup}>Done</button>{isOpen && 
//                 <Popup
//                     content={
//                         <>
//                             <div className='circle'>
//                                 <img src='./star.png' />
//                             </div>
//                             <h1>Thank you 😊</h1>
//                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                             <Link to="/home">
//                                 <div>
//                                     <button className='btn-popup'  >Go Home</button>
//                                 </div>
//                             </Link>
//                         </>}
//                 />}
//             </div>

//         </div>

//     )
// }

// export default Index