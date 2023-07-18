import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <div className='Main'>
            <div className='NotificationPage'>
                <div className='container'>
                    <div className='Today'>
                        <h1>Today</h1>
                        <div className='Trans1'>
                            <img src='./Trans.png' />
                            <div>
                                <h5>On the other hand, we denounce with righteous indignation.</h5>
                                <p>02:02 PM</p>
                            </div>
                        </div>

                        <div className='Trans1'>
                            <img src='./Trans1.png' />
                            <div>
                                <h5>Dislike men who are so beguiled and demoralized by the charms.</h5>
                                <p>02:02 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className='Yesterday'>
                        <h1>Yesterday</h1>
                        <div className='Trans'>
                            <div className='TranImg'>
                                <img src='./Trans2.png' />
                            </div>
                            <div>
                                <h5>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45.</h5>
                                <p>02:02 PM</p>
                            </div>
                        </div>

                        <div className='Trans'>
                            <div className='TranImg'>
                                <img src='./Trans3.png' />
                            </div>
                            <div>
                                <h5>1914 translation by H. Rackham translation by H. Halim</h5>
                                <p>02:02 PM</p>
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
                <div className='active'>
                    <i className="fa fa-bell-o active" aria-hidden="true"></i>
                    <p className='active'> Notifications</p>
                </div>
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
