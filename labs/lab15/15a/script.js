var stocks = [];

stocks.push({
  name: "Microsoft",
  MarketCap: "$381.7 B",
  Sales: "$86.8 B",
  Profit: "$22.1 B",
  numEmp: 128000
});

stocks.push({
  name: "Symetra Financial",
  MarketCap: "$2.7 B",
  Sales: "$2.2 B",
  Profit: "$254.4 M",
  numEmp: 1400
});
stocks.push({
  name: "Micron Technology",
  MarketCap: "$37.6 B",
  Sales: "$16.4 B",
  Profit: "$3.0 B",
  numEmp: 30400
});
stocks.push({
  name: "F5 Networks",
  MarketCap: "$9.5 B",
  Sales: "$1.7 B",
  Profit: "$311.2 M",
  numEmp: 3834
});
stocks.push({
  name: "Expedia",
  MarketCap: "$10.8 B",
  Sales: "$5.8 B",
  Profit: "$398.1 M",
  numEmp: 18210
});
stocks.push({
  name: "Nautilus",
  MarketCap: "$476 M",
  Sales: "$274.4 M",
  Profit: "$18.8 M",
  numEmp: 340
});

stocks.push({
  name: "Heritage Financial",
  MarketCap: "$531 M",
  Sales: "$137.6 M",
  Profit: "$21 M",
  numEmp: 748
});
stocks.push({
  name: "Cascade Microtech",
  MarketCap: "$239 M",
  Sales: "$136 M",
  Profit: "$9.9 M",
  numEmp: 449
});
stocks.push({
  name: "Nike",
  MarketCap: "$83.1 B",
  Sales: "$27.8 B",
  Profit: "$2.7 B",
  numEmp: 56500
});
stocks.push({
  name: "Alaska Air Group",
  MarketCap: "$7.9 B",
  Sales: "$5.4 B",
  Profit: "$605 M",
  numEmp: 13952
});
console.log(stocks);


function renderFunction(stock){
  let s = "<tr><td>";
  s += stock.name + "</td><td>";
  s += stock.MarketCap + "</td><td>";
  s += stock.Sales + "</td><td>";
  s += stock.Profit + "</td><td>";
  s += stock.numEmp + "</td></tr>";
  let tab = document.getElementById('tabl');
  tab.innerHTML += s;
}

let tab = document.getElementById('tabl');
tab.innerHTML = "";
stocks.forEach(renderFunction);