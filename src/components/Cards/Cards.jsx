import { iconsImgs } from "../../utils/images";
import "./Cards.scss";
function Cards() {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className=" grid-c-title-text">Cards</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="gird-c1-content">
        <p>Balance</p>
         <div className="lg-value">$22,000</div>{/* 账户余额 */}
        <div className="card-wrapper">{/* 卡号 */}
          <span className="card-pin-hidden">**** **** ****</span>
          <span>1234</span>
        </div>
        <div className="card-logo-wrapper">
          <div>
            <p className="text text-silver-v1">Expires</p>
            <p className="text text-sm text-white">12/22</p>
          </div>
          <div className="card-logo">
            <div className="logo-shape1"></div>
            <div className="logo-shape2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
