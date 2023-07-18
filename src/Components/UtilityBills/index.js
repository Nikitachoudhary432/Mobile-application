import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <div className='Main'>
            <div className='BilllsPage'>
                <div className="container">
                    <div className='Grid'>
                        <div>
                            <div className="utility-icon-box">
                                <img src='./grid1.png' />
                            </div>
                            <div className='Name'>
                                <h1>Mobile Recharge</h1>
                            </div>
                        </div>
                        <div>
                            <div className="utility-icon-box">
                                <img src='./grid2.png' />
                            </div>
                            <div className='Name'>
                                <h1>DTH Recharge</h1>
                            </div>
                        </div>
                        <div>
                            <div className="utility-icon-box">
                                <img src='./grid3.png' />
                            </div>
                            <div className='Name'>
                                <h1>Electricity Bill</h1>
                            </div>
                        </div>
                        <div>
                            <div className="utility-icon-box">
                                <img src='./grid4.png' />
                            </div>
                            <div className='Name'>
                                <h1>Book a Cylinder</h1>
                            </div>
                        </div>
                        <div>
                            <div className="utility-icon-box">
                                <img src='./grid5.png' />
                            </div>
                            <div className='Name'>
                                <h1>Send Money</h1>
                            </div>
                        </div>
                        <div>
                            <div className="utility-icon-box">
                                <img src='./grid6.png' />
                            </div>
                            <div className='Name'>
                                <h1>More</h1>
                            </div>
                        </div>

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
                <div className='active'>
                    <i className="fa fa-sticky-note-o active" aria-hidden="true"></i>
                    <p className='active'>Utility Bills</p>
                </div>
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
    )
}

export default index
