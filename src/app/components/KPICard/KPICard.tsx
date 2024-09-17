import React from 'react'
import styles from "./KPICard.module.css";

const KPICard = ({ title, value }: { title: string, value: number }) => {
  return (
    <div className={styles.Card}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default KPICard
