import React from 'react'
import { Link,Outlet } from 'react-router-dom'


function Balanace() {
  return (
    <div>
        <div className="bal"> 
        <div className="in_bal"> 
        <div className="out_bal"><h2> See your Current Balance</h2> 
        
        <Link to="/navbar/checkbalance"><button className='but_check'>Check now</button></Link></div> </div>
    
        </div>
       
    </div>
  )
}

export default Balanace