import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Popup from './../Otppage/Popup'
import { Link } from 'react-router-dom';
import OTPInput, { ResendOTP } from "otp-input-react";

const App = () => {
    let navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    function onSignup() {
        if (!ph) {
            alert('phone number is required')

        }
        else {
            setLoading(true);
            onCaptchVerify();

            const appVerifier = window.recaptchaVerifier;

            const formatPh = "+" + ph;

            signInWithPhoneNumber(auth, formatPh, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    setLoading(false);
                    setShowOTP(true);
                    toast.success("OTP sended successfully!");

                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);

                });
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    function togglePopup(e) {
        e.preventDefault();
        if (!otp || otp.length < 4) {
            alert('Please Verify OTP')
        } else {
            setIsOpen(!isOpen);
            setLoading(true);
            window.confirmationResult
                .confirm(otp)
                .then(async (res) => {
                    console.log(res);
                    setUser(res.user);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }

    return (
        <section className="main">
            <div className='Loginpage'>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                    {showOTP ? (
                        <>
                            <div>
                                <div className='backButton'>
                                    <button onClick={() => navigate(-1)}>
                                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div className='verification'>
                                    <h1>Enter OTP</h1>
                                    <p>Enter One Time Password (otp) to enter the app.</p>
                                </div>
                                <div className="verification-code">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        OTPLength={6}
                                        otpType="number"
                                        disabled={false}
                                        autoFocus
                                        secure
                                    />

                                </div>
                            </div>
                            <div>
                                <button onClick={togglePopup} className="btn-btn">
                                    {loading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>Verify OTP</span>
                                </button>
                                {isOpen &&
                                    <Popup
                                        content={
                                            <>
                                                <div className='circle'>
                                                    <img src='./star.png' />
                                                </div>
                                                <h1>Thank you 😊</h1>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <Link to="/home">
                                                    <div>
                                                        <button className='btn-popup'  >Go Home</button>
                                                    </div>
                                                </Link>
                                            </>}
                                    />}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='icon-grey'>
                                <h1>.</h1>
                            </div>
                            <div className='Heading'>
                                <h1>Welcome</h1>
                                <p>Login into your account with your phone number.</p>
                            </div>
                            <div className="Form-group">
                                <label htmlFor=""> Mobile Number</label>
                                <div className='Phone'>
                                    <PhoneInput
                                        defaultCountry='US'
                                        value={ph}
                                        onChange={setPh}
                                        className='phoneInput'
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {!showOTP && (
                <button onClick={onSignup} className='btn-btn'>
                    {loading && (
                        <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Login</span>
                </button>
            )}
        </section>
    );
};

export default App;
