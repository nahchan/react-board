/* 订阅 */
import './Subscriptions.scss'
import { subscriptions } from '../../data/data'
import { iconsImgs } from '../../utils/images'
const Subscriptions =()=>{
    return (
        <div className='subgrid-two-item grid-common grid-c5'>
            <div className='grid-c-title'>
                <h3 className='grid-c-title-text'>SubScriptions</h3>
                <button className='grid-c-title-icon'>
                    <img src={iconsImgs.plus} alt="" />
                </button>
            </div>
            <div className='grid-c5-content'>
                <div className='grid-items'>
                    {
                        subscriptions.map((sub)=>(
                            <div className='grid-item' key={sub.id}>
                                <div className='grid-item-l'>
                                    <div className='icon'>
                                        <img src={iconsImgs.alert} alt="" />
                                    </div>
                                    <div className='text text-silver-v1'>
                                        {sub.title}<span> due {sub.due_date}</span>
                                    </div>
                                </div>
                                <div className='grid-item-r'>
                                    <span className='text-silver-v1'>${sub.amount}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Subscriptions