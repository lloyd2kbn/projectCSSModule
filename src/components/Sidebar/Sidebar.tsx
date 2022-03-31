import React from 'react';
import styles from './Sidebar.module.scss';
import samanthaImg from '../../assets/png/samantha.png';
import {Link, useLocation} from 'react-router-dom';
const sidebarNavLinks=['dashboard','expenses','wallets','summarys','accounts','settings'];
function Sidebar() {
  const location=useLocation();

  return (
    <>
            <aside className={styles['sidebar']}>
                    <div className={styles['sidebarContent']}>
                        {/*Profile Detail  */}
                        <div className={styles['profileDetails']}>
                            <div className={styles['profileImageDiv']}>
                                    <img src={samanthaImg} alt="samantha" />
                                    <p className={styles['notification']}>4</p>
                            </div>
                            <p className={styles['userName']}>Samantha</p>
                            <p className={styles['userEmail']}>samantha@email.com</p>
                        </div>
                        {/* Nav */}
                        <nav className={styles['sidebarNav']}>
                             <ul>
                                     {
                                             sidebarNavLinks.map((sidebarNavLink,index)=>{                                                  
                                                return    <li className={styles['sidebarNavItem']} key={index}>
                                                                <Link  className={location.pathname===`/${sidebarNavLink}`?styles['sidebarNavLinkActive']:styles['sidebarNavLink']} to={`/${sidebarNavLink}`}>
                                                                        {sidebarNavLink.charAt(0).toLocaleUpperCase()+sidebarNavLink.slice(1)}
                                                                        </Link>
                                                                 </li>
                                             })
                                     }                                 
                             </ul>
                        </nav>
                    </div>
            </aside>
    </>
  )
}

export default Sidebar