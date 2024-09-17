import React from 'react'
import { BASEURL } from '../../../../../constants/const';
import { TypeTransaction } from '../../../../../interfaces/TypeTransaction';
import styles from "./TransactionTable.module.css";
const TransactionTable = async () => {
  const sales = await fetch(`${BASEURL}/transaction/get`);
  const transactionResponse = await sales.json();

  return (
    <div>
      <table className={styles.Table}>
        <thead>
          <tr className={styles.Table__td}>
            <th className={styles.Table__td}>Sr.no</th>
            <th className={styles.Table__td}>Item</th>
            <th className={styles.Table__td}>Amount</th>
            <th className={styles.Table__td}>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionResponse.map((item: TypeTransaction) => {
            return (
              <tr className={styles.Table__tr} key={item.id}>
                <td className={styles.Table__td}>{item.id.toString()}</td>
                <td className={styles.Table__td}>{item.item}</td>
                <td className={styles.Table__td}>{item.amount.toString()}</td>
                <td className={styles.Table__td}>{item.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable
