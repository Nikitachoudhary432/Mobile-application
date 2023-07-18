import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const ToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='mains'>
            <div className='profile'>
                <div className='backButton'>
                    <button onClick={() => navigate(-1)}>
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                    <h1>Profile</h1>
                    <div className="burger-P">
                    <nav className="nav navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <div className="form-inline ml-auto">
                                <div className="Strip  " onClick={ToggleSidebar} >
                                    <i className="fa fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="btnn" onClick={ToggleSidebar}>
                            <i className="fa fa-times"></i>
                            </div>
                        <div className="sd-header">
                            <img src='./Rectangle 8.png' />
                            <h4 className="mb-0">Mahmudul Hasan</h4>
                        </div>
                        <div className='line'></div>
                        <div className="sd-body">
                            <ul>
                                <li><Link to='/home' className="sd-link">Home</Link></li>
                                <li><Link href='/utility' className="sd-link">UtilityBills</Link></li>
                                <li><Link to='/transaction' className="sd-link">Transaction</Link></li>
                                <li><Link to='/notification' className="sd-link">Notification</Link></li>
                                <li><Link to='/support' className="sd-link">Support</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}>
                    </div>
                </div>
                </div>

                <div className='profile-info'>
                    <div className='user-img'>
                        <img src='image.png' />
                        <h1>Mahmudul Hasan</h1>
                        <p>mhasan@gamapay.com</p>
                    </div>

                    <div className='Bank-detail'>

                        <div className='user-detail'>
                            <div className='d'>
                                <h1>Bank Details</h1>
                            </div>
                            <div className='p'>
                                <p>Add New</p>
                            </div>
                        </div>
                        <div className='detail-user'>
                            <div className='info-user'>
                                <img src='./pro1.png' />
                                <input type='text' placeholder='123 |'>
                                </input>
                            </div>
                            <div className='info-user'>
                                <img src='./pro2.png' />

                                <input type='text' placeholder='Account number '>
                                </input>
                            </div>
                            <div className='info-user'>
                                <img src='./pro3.png' />

                                <input type='text' placeholder='Bank name'>
                                </input>
                            </div>
                            <div className='info-user'>
                                <img src='./pro4.png' />

                                <input type='text' placeholder='Account holder name'>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <button className='btn-btn'>Submit</button>
            </div>
        </div>
    )
}

export default Index
