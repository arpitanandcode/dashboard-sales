import React from 'react'
import { BASEURL } from '../../../../../constants/const'
import TransactionChart from '../../Chart/Chart';
import { flatObject, getValuesFromKey } from '../../../../../utility/utility';

const Transaction = async () => {
  const sales = await fetch(`${BASEURL}/sales/get`);
  const salesResponse = await sales.json();

  console.log(getValuesFromKey(flatObject(salesResponse), "key"));

  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: getValuesFromKey(flatObject(salesResponse), "key")
      }
    },
    series: [
      {
        name: "series-1",
        data: getValuesFromKey(flatObject(salesResponse), "value")
      }
    ]
  };
  return (
    <div>
      <TransactionChart
        series={state?.series}
        options={state?.options} />
    </div>
  )
}

export default Transaction
