/* 预算 */
import "./Budget.scss";
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";
const Budget = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Budget</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c-top text-silver-v1">
        <h2 className="lg-value">Cash</h2>
        <span className="lg-value">$100,000</span>
      </div>
      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          {budget.map((budget) => (
            <div className="grid-item" key={budget.id}>
              {/* 左侧 */}
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.check} alt="" />
                </div>
                <p className="text text-silver-v1">
                  {budget.title}
                  <span>{budget.type}</span>
                </p>
              </div>
              {/* 右侧 */}
              <div className="grid-item-r">
                <span className="text-silver-v1">${budget.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Budget;
