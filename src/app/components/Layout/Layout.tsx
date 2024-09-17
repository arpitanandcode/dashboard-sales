import React from 'react'
import styles from "./Layout.module.css"
import Sales from './Sales/Sales';
import Transaction from './Transaction/Transaction';
import TransactionTable from './TransactionTable/TransactionTable';

const Layout = () => {

  return (
    <div className={styles.Layout}>
      <div className={styles.Layout__Header}>
        <p>Dashboard</p>
        <p>Login</p>
      </div>
      <div className={styles.Layout__SideNav}>
        <p>Dashboard</p>
      </div>
      <div className={styles.Layout__Body}>
        <Sales />
        <div className={styles.Layout__Container}>
          <Transaction />
          <TransactionTable />
        </div>
      </div>
    </div>
  )
}

export default Layout;
