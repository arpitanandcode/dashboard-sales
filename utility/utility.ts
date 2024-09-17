export const flatObject = (obj) => {
  const sales = [
    {
      key: "totalSales",
      value: 12000,
    }
  ];

  for(const o in obj["salesByCategory"]){
    sales.push({
      key: o,
      value: obj["salesByCategory"][o],
    })
  }

  return sales;
};

export  const getValuesFromKey =(data, key) => {
  const list = [];

  for(const l of data){
    list.push(l[key]);
  }

  return list;
}