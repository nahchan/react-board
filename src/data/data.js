import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

/* 左侧菜单 */
/* export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },//预算
    { id: 3, title: 'Transactions', image: iconsImgs.plane },//交易
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },//订阅
    { id: 5, title: 'Loans', image: iconsImgs.bills },//借贷
    { id: 6, title: 'Reports', image: iconsImgs.report },//报告
    { id: 7, title: 'Savings', image: iconsImgs.wallet },//储蓄，存款
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },//财务建议
    { id: 9, title: 'Account', image: iconsImgs.user },//账目账单
    { id: 10, title: 'Settings', image: iconsImgs.gears }//设置
]; */
export const navigationLinks = [
    { id: 1, title: '首页', image: iconsImgs.home },
    { id: 2, title: '预算', image: iconsImgs.budget },//预算
    { id: 3, title: '交易', image: iconsImgs.plane },//交易
    { id: 4, title: '订阅', image: iconsImgs.wallet },//订阅
    { id: 5, title: '借款', image: iconsImgs.bills },//借贷
    { id: 6, title: '报告', image: iconsImgs.report },//报告
    { id: 7, title: '存款', image: iconsImgs.wallet },//储蓄，存款
    { id: 8, title: '财务顾问', image: iconsImgs.wealth },//财务建议
    { id: 9, title: '账单', image: iconsImgs.user },//账目账单
    { id: 10, title: '设置', image: iconsImgs.gears }//设置
];

/* 交易 */
export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];
/* 报告 */
export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];
/* 预算 */
export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];
/* 订阅 */
export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]