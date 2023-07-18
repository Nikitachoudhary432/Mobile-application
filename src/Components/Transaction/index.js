import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const TransactionsData = [
  {
    'status' : 'success', 
    'fund_id': '227hdhdd83738',
    'rquest_type':'Debit',
    'bank_name': 'HDFC Bank',
    'price' : '₹ 745.45',
    'image' : '/Vector.png'
  }, 
  {
    'status' : 'declined', 
    'fund_id': '5efde2sdef5e6e8',
    'rquest_type':'Debit',
    'bank_name': 'HDFC Bank',
    'price' : '₹ 450.19',
    'image' : '/Cross.png'
  },
  {
    'status' : 'warning', 
    'fund_id': '227hdhdd83740',
    'rquest_type':'Debit',
    'bank_name': 'HDFC Bank',
    'price' : '₹ 1000.00',
    image : '/Cross.png'
  },
  {
    'status' : 'success', 
    'fund_id': '227hdhdd83738',
    'rquest_type':'Debit',
    'bank_name': 'HDFC Bank',
    'price' : '₹ 500',
    'image' : '/Vector.png'
  }, 
  {
    'status' : 'declined', 
    'fund_id': '5efde2sdef5e6e8',
    'rquest_type':'Debit',
    'bank_name': 'HDFC Bank',
    'price' : '₹ 920.19',
    'image' : '/Cross.png'
  },
  {
    'status' : 'success', 
    'fund_id': '227hdhdd83738',
    'rquest_type':'Debit',
    'bank_name': 'HDFC Bank',
    'price' : '₹ 350.45',
    'image' : '/Vector.png'
  }
]
const Index = () => {

  const [items, setItems] = useState(TransactionsData);
  const [ filterByItem, setFilterByItem] = useState("All");
  console.log('filterByItem', filterByItem)
  // function showCard(cardId) {
  //   var card = document.getElementById(cardId);
  //   if (card.style.display === "none") {
  //     card.style.display = "block";
  //   } else {
  //     card.style.display = "none";
  //   }
  // }


  function handleFilter(val){
    let updatedItems2 = TransactionsData;
    if(val !== 'All') {
      updatedItems2 = TransactionsData.filter((curElement) => {
        return curElement.status === val;
      })  
    }
    setItems(updatedItems2);
      setFilterByItem(val);
  }
  return (
    <div className='Main'>
      <div className='TransactionPage'>


        <div className='Transaction'>
          <div className='container'>
            <div className='menu-tabs'>
              <div className='menu-tabs d-flex justify-content-around'>
                <button className={filterByItem === 'All' ? 'btn bttn-warning active' : 'btn bttn-warning '} onClick={() => handleFilter('All')} >All </button>
                <button className={filterByItem === 'declined' ? 'btn bttn-warning active' : 'btn bttn-warning '} onClick={() =>handleFilter('declined')} >Declined</button>
                <button className={filterByItem === 'success' ? 'btn bttn-warning active' : 'btn bttn-warning '} onClick={() =>handleFilter('success')} >Success</button>
                <button className={filterByItem === 'warning' ? 'btn bttn-warning active' : 'btn bttn-warning '} onClick={() =>handleFilter('warning')} >Warning</button>

              </div>
            </div>
            <div className='card-list'>
                {
                  items?.map((elem) => {
                    const {status, fund_id, rquest_type, price, image} = elem;
                    return(
                      <div className={status === 'success' ? 'card-S' : status === 'declined' ? 'card-D' : 'card-W'}>
                      <div className='card1'>
                        <div className='detail'>
                          <h1>Fund ID</h1>
                          <p>{fund_id}</p>
                        </div>
                        <div className={status === 'success' ? 'detail5' : status === 'declined' ? 'detail1' : 'detail8'}>
                          <h1>{price}</h1>
                          <p>Mon, 02 Aug, 2021</p>
                        </div>
                      </div>
                      <div className='card2'>
                        <div className='detail2'>
                          <h1>{rquest_type}</h1>
                          <p>Request type</p>
                        </div>
                        <div className='detail3'>
                          <h1>Bank</h1>
                          <p>Withdrawal Mode</p>
                        </div>
                      </div>
                      <div className='button'>
                        <div className='img-btn'>
                          <img src={image} />
                        </div>
                        <h1>{status}</h1>
                      </div>
                    </div>
                    )

                  })
                }
              {/* <div className='card-D'>
                <div className='card1'>
                  <div className='detail'>
                    <h1>Fund ID</h1>
                    <p>5efde2sdef5e6e8</p>
                  </div>
                  <div className='detail1'>
                    <h1>₹ 745.45</h1>
                    <p>Mon, 02 Aug, 2021</p>
                  </div>
                </div>
                <div className='card2'>
                  <div className='detail2'>
                    <h1>Debit</h1>
                    <p>Request type</p>
                  </div>
                  <div className='detail3'>
                    <h1>Bank</h1>
                    <p>Withdrawal Mode</p>
                  </div>
                </div>
                <div className='button'>
                  <div className='img-btn'>
                    <img src='./Cross.png' />
                  </div>
                  <h1>Declined</h1>
                </div>
              </div> */}

              {/* <div className='card-S' id='card-S'>
                <div className='card1'>
                  <div className='detail'>
                    <h1>Fund ID</h1>
                    <p>5efde2sdef5e6e8</p>
                  </div>
                  <div className='detail5'>
                    <h1>₹ 745.45</h1>
                    <p>Mon, 02 Aug, 2021</p>
                  </div>
                </div>
                <div className='card2'>
                  <div className='detail2'>
                    <h1>Debit</h1>
                    <p>Request type</p>
                  </div>
                  <div className='detail3'>
                    <h1>Bank</h1>
                    <p>Withdrawal Mode</p>
                  </div>
                </div>
                <div className='button5'>
                  <div className='img-btn'>
                    <img src='./Vector.png' />
                  </div>
                  <h1>Success</h1>
                </div>
              </div>

              <div className='card-D' id='card-D'>
                <div className='card1'>
                  <div className='detail'>
                    <h1>Fund ID</h1>
                    <p>5efde2sdef5e6e8</p>
                  </div>
                  <div className='detail1'>
                    <h1>₹ 800</h1>
                    <p>Mon, 02 Aug, 2021</p>
                  </div>
                </div>
                <div className='card2'>
                  <div className='detail2'>
                    <h1>Debit</h1>
                    <p>Request type</p>
                  </div>
                  <div className='detail3'>
                    <h1>Bank</h1>
                    <p>Withdrawal Mode</p>
                  </div>
                </div>
                <div className='button'>
                  <div className='img-btn'>
                    <img src='./Cross.png' />
                  </div>
                  <h1>Declined</h1>
                </div>
              </div>

              <div className='card-W' id='card-W'>
                <div className='card1'>
                  <div className='detail'>
                    <h1>Fund ID</h1>
                    <p>5efde2sdef5e6e8</p>
                  </div>
                  <div className='detail8'>
                    <h1>₹ 1000</h1>
                    <p>Mon, 02 Aug, 2021</p>
                  </div>
                </div>
                <div className='card2'>
                  <div className='detail2'>
                    <h1>Debit</h1>
                    <p>Request type</p>
                  </div>
                  <div className='detail3'>
                    <h1>Bank</h1>
                    <p>Withdrawal Mode</p>
                  </div>
                </div>
                <div className='button8'>
                  <div className='img-btn'>
                    <img src='./Cross.png' />
                  </div>
                  <h1>Warning</h1>
                </div>
              </div>

              <div className='card-S' id='card-S'>
                <div className='card1'>
                  <div className='detail'>
                    <h1>Fund ID</h1>
                    <p>5efde2sdef5e6e8</p>
                  </div>
                  <div className='detail5'>
                    <h1>₹ 280.57</h1>
                    <p>Mon, 02 Aug, 2021</p>
                  </div>
                </div>
                <div className='card2'>
                  <div className='detail2'>
                    <h1>Debit</h1>
                    <p>Request type</p>
                  </div>
                  <div className='detail3'>
                    <h1>Bank</h1>
                    <p>Withdrawal Mode</p>
                  </div>
                </div>
                <div className='button5'>
                  <div className='img-btn'>
                    <img src='./Vector.png' />
                  </div>
                  <h1>Success</h1>
                </div>
              </div>

              <div className='card-D' id='card-D'>
                <div className='card1'>
                  <div className='detail'>
                    <h1>Fund ID</h1>
                    <p>5efde2sdef5e6e8</p>
                  </div>
                  <div className='detail1'>
                    <h1>₹ 500.69</h1>
                    <p>Mon, 02 Aug, 2021</p>
                  </div>
                </div>
                <div className='card2'>
                  <div className='detail2'>
                    <h1>Debit</h1>
                    <p>Request type</p>
                  </div>
                  <div className='detail3'>
                    <h1>Bank</h1>
                    <p>Withdrawal Mode</p>
                  </div>
                </div>
                <div className='button'>
                  <div className='img-btn'>
                    <img src='./Cross.png' />
                  </div>
                  <h1>Declined</h1>
                </div>
              </div> */}
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
            <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
            <p>Utility Bills</p>
          </div>
        </Link>

        <div className='active'>
          <i className="fa fa-calendar active" aria-hidden="true"></i>
          <p className='active'>Transactions</p>
        </div>

        <Link to='/Notification'>
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

export default Index
