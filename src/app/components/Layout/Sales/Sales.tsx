import React from 'react'
import { BASEURL } from '../../../../../constants/const'
import { flatObject } from '../../../../../utility/utility';
import KPICard from '../../KPICard/KPICard';

const Sales = async () => {
  const sales = await fetch(`${BASEURL}/sales/get`);
  const salesResponse = await sales.json();

  console.log(flatObject(salesResponse));
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {
        flatObject(salesResponse).map((item, i) => {
          return (
            <div key={i}>
              <KPICard title={item.key} value={item.value} />
            </div>
          );
        })
      }
    </div>
  )
}

export default Sales
