import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import './App.css';
import Splash from './Components/Splash'
import './Components/Splash/index.css';
import LoginPage from './Components/LoginPage'
import './Components/LoginPage/index.css';
// import Otppage from './Components/Otppage'
// import './Components/Otppage/index.css';
import  Home  from "./Components/Home";
import './Components/Home/index.css'
import Funds from './Components/Funds'
import './Components/Funds/index.css'
import Amount from './Components/Amount'
import './Components/Amount/index.css'
import UtilityBills from './Components/UtilityBills'
import './Components/UtilityBills/index.css'
import Transaction from './Components/Transaction'
import './Components/Transaction/index.css'
import Notification from './Components/Notification'
import './Components/Notification/index.css'
import Support from './Components/Support'
import './Components/Support/index.css'
import Profile from './Components/Profile'
import './Components/Profile/index.css'
import Navigationbar from './Components/navigationbar'
import { useState , useEffect} from "react";
// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   const userToken = localStorage.getItem("userToken");
  //   if (!userToken) {
  //     navigate.push("/loginpage");
  //   }
  // }, [navigate]);
  
  const [isSplash, setIsSplash] = useState(true);
  
   useEffect(()=>{
    setTimeout(() => {
      setIsSplash(false)
    } , 2000);
    
   } ,[])
  return (
    <div className="App">
      {/* <Funds/> */}
     
      <Router>
        <Routes>
          <Route path="/" element={isSplash ? <Splash/>:<LoginPage/>} />
          <Route path="/loginpage" element={<LoginPage/>} />
          {/* <Route path="/otppage" element={<Otppage/>} /> */}
          <Route path="/home" element={<><Navigationbar/>, <Home/></>} />
          <Route path="/funds" element={<Funds/>} />
          <Route path="/amount" element={<Amount/>} />
          <Route path="/utility" element={<><Navigationbar/>,<UtilityBills/></>} />
          <Route path="/transaction" element={<><Navigationbar/>,<Transaction/></>} />
          <Route path="/notification" element={<><Navigationbar/>,<Notification/></>} />
          <Route path="/support" element={<><Navigationbar/>,<Support/></>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
