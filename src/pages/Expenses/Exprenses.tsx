import styles from './Expenses.module.scss';
import personOne from '../../assets/png/person1.png';
import personTwo from '../../assets/png/person2.png';
import personThree from '../../assets/png/person3.png';
import addIcon from '../../assets/png/addIcon.png';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import optionsIcon from '../../assets/png/menuIcon.png';
import cartIcon from '../../assets/svg/cartIcon.svg';
import transportIcon from '../../assets/svg/transportIcon.svg';
import houseIcon from '../../assets/svg/houseIcon.svg';
import { useState } from 'react';
function Exprenses() {
  const [activeIndex,setActiveIndex]=useState(0);
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const todayExpenses = [
    {
      id: 1,
      expense: "Grocery",
      time: "5:12 pm",
      location: "Belanja di pascar",
      price: 326.8,
      icon: cartIcon,
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transportation",
      time: "5:12 pm",
      location: "Naik bus umum",
      price: 15.0,
      icon: transportIcon,
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Housing",
      time: "5:12 pm",
      location: "Bayar Listrik",
      price: 185.75,
      icon: houseIcon,
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "Food and Drink",
      time: "5:12 pm",
      location: "Makan Steak",
      price: 156.0,
      icon: cartIcon,
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entertainment",
      time: "5:12 pm",
      location: "Nonton Bioskop",
      price: 35.2,
      icon: transportIcon,
      iconBackgroundColor: "#4BA83D",
    },
  ];
  const spendCategories = [
    {
      id: 1,
      category: "Food and Drinks",
      price: 872.4,
    },
    {
      id: 2,
      category: "Shopping",
      price: 1378.2,
    },
    {
      id: 3,
      category: "Housing",
      price: 928.5,
    },
    {
      id: 4,
      category: "Transportation",
      price: 420.7,
    },
    {
      id: 5,
      category: "Vehicle",
      price: 520,
    },
  ];
          const onMouseOver=(data:any,index:number)=>{
                  setActiveIndex(index)
          }
  return (
    <main className={styles['expenses']}>
          <div className={styles['expensesCard']}>
             {/* paragraph Left*/}
                <section className={styles['expensesOverview']}>
                    {/* header */}
                    <div className={styles['expensesHeader']}>
                          <p className={styles['expensesTitle']}>Expenses</p>
                          <div className={styles['expensesAction']}>
                                <div className={styles['personImages']}>
                                    <img src={personOne} alt="person one" />
                                    <img src={personTwo} alt="person two" />
                                    <img src={personThree} className={styles['personThree']} alt="person three" />
                                </div>
                                <button>
                                  <img src={addIcon}  className={styles['addIcon']} alt="add" />
                                </button>
                          </div>
                    </div>
                    <p className={styles['dateRange']}>01 - 25 March</p>
                    {/* chart */}
                    <ResponsiveContainer width="100%" minHeight="9vh">
                        <BarChart width={150} height={40} data={data}>
                             <Bar dataKey="uv" fill="rgba(21,122,255,.2)" onMouseOver={onMouseOver}>
                                    {data.map((entry,index)=>{
                                          return  <Cell key={index} cursor="pointer" fill={index===activeIndex?"rgb(21,122,255)":"rgba(21,122,255,.2)"}/>
                                    })}
                              </Bar>
                         </BarChart>
                   </ResponsiveContainer>


                   {/* Expense OverviewHeaderToday */}
                   <div className={styles['expensesOverviewHeader']}>
                                <p className={styles['expensesOverviewTitle']}>Today</p>
                                <button>
                                  <img src={optionsIcon} alt="options" />
                                </button>
                   </div>


                   <ul>
                     {todayExpenses.map((item,index)=>{
                      return    <li key={index} className={styles['expenseItem']}>
                                          <div className={styles['expenseItemLeft']}>
                                          <div  style={{backgroundColor:item.iconBackgroundColor}} className={styles['expenseItemDiv']}>
                                            <img className='' src={cartIcon} alt={item.expense} />
                                          </div>
                                          <div className={styles['expenseItemDetails']}>
                                              <p className={styles['expenseItemTitle']}>
                                                  {item.expense}
                                              </p>
                                              <p className={styles['expenseItemTime']}>
                                                  {item.time} • {item.location}
                                              </p>
                                          </div>
                                        </div>
                                        <p className={styles['expenseItemPrice']}>-{item.price.toFixed(2)}</p>
                             </li>
                     })}
                    
                   </ul>
                   {/*......................... */}
                   <div className={styles['expensesOverviewHeader']}>
                                <p className={styles['expensesOverviewTitle']}>Monday,March 2020</p>
                                <button>
                                  <img src={optionsIcon} alt="options" />
                                </button>
                   </div>
                   <ul>
                     {previousExpenses.map((item,index)=>{
                      return    <li key={index} className={styles['expenseItem']}>
                                          <div className={styles['expenseItemLeft']}>
                                          <div  style={{backgroundColor:item.iconBackgroundColor}} className={styles['expenseItemDiv']}>
                                            <img className='' src={cartIcon} alt={item.expense} />
                                          </div>
                                          <div className={styles['expenseItemDetails']}>
                                              <p className={styles['expenseItemTitle']}>
                                                  {item.expense}
                                              </p>
                                              <p className={styles['expenseItemTime']}>
                                                  {item.time} • {item.location}
                                              </p>
                                          </div>
                                        </div>
                                        <p className={styles['expenseItemPrice']}>-{item.price.toFixed(2)}</p>
                             </li>
                     })}
                    
                   </ul>
                </section>
              {/* paragraph Right */}
          </div>
               
    </main>
  )
}

export default Exprenses