import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className='Homepage'>
            <div className='bar-info'>
                {/* <div className="burger">
                    <div className="strip burger-strip " onClick={handleShowNavbar}>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                </div> */}
                <div className="burger">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <div className="form-inline ml-auto">
                                <div className="strip burger-strip " onClick={ToggleSidebar} >
                                    <i className="fa fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
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


                <div className='User px-3'>
                    <h4>Welcome</h4>
                    <h1>Mahmudul H.</h1>
                </div>
            </div>
            <Link to='/profile'>
                <div className='User-image'>
                    <img src='./Rectangle 8.png' />
                </div>
            </Link>
        </div>

    )
}

export default Index
