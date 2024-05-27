/* 交易 */
import "./Transactions.scss";
import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";
function Transactions() {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">All Transactions</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-content">
        <div className="gird-items">
          {transactions.map((transaction) => (
            <div className="grid-item" key={transaction.id}>
              <div className="grid-item-l">
                {/* 头像 */}
                <div className="avator img-fit-cover">
                  <img src={transaction.image} alt="" />
                </div>
                {/* 名字 */}
                <p className="text">
                  {transaction.name} {/* 交易日期 */}
                  <span>{transaction.date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">${transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Transactions;
