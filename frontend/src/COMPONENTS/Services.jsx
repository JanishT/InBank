import React from "react";
import Deposit from "./imgs/deposit.png";
import Credit from "./imgs/quick.png";
import Service from "./imgs/serv.jpg";
import { Link ,Outlet} from "react-router-dom";


function Services() {
  return (
    <div className="Services_ful">
      <div className="left_service">
        <div className="out_card_ser">
          <Link className="service_lnk"to="/navbar/deposit">
            <div className="card_services">
              <img width="70px" height="70px" src={Deposit} alt="" />
              <h2>Create Deposit</h2>
              <span>
                Return the money after a certain <br />
                after a certain period of time with interest
              </span>
            </div>
          </Link>
          <Link className="service_lnk"to="/navbar/withdraw">
          <div className="card_services">
            <img width="70px" height="70px" src={Credit} alt="" />
            <h2>Quick Credit</h2>
            <span>
              Money and tangible provided <br />
              to you by the creator for use
            </span>
          </div></Link>
        </div>
      </div>
      <div className="right_services">
        <h2 className="get_serv">
          <b>Get financial services</b>
        </h2>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, earum,
          saepe ipsum impedit velit aliquam <br />
          rem totam natus tenetur minus in nam consectetur iste sed debitis hic,
          accusamus consequuntur cumque.
        </span>
        <img width="700px" height="500px" src={Service} alt="" className="ser_img"/>
      </div>

      <Outlet/>
    </div>
  );
}

export default Services;
