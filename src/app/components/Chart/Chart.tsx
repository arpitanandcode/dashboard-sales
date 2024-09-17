'use client';
import dynamic from 'next/dynamic'
import React from 'react'
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const TransactionChart = ({ options, series }: { options: any, series: any }) => {
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="500"
      />
    </div>
  )
}

export default TransactionChart
