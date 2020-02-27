var el = document.getElementById("table_data");

function oneRow(garry) {
  var s = "";
  s += "<tr><td>" + garry[0] + "</td>";
  s += "<td>" + garry[1] + "</td>";
  s += "<td>" + garry[2] + "</td>";
  s += "<td>" + garry[3] + "</td>";
  s += "</tr>";
  return s;
}


function calcCircleGeometries(radius) {
  const pi = Math.PI;
  var area = pi * radius * radius;
  var circumference = 2 * pi * radius;
  var diameter = 2 * radius;
  
  var geometries = [radius.toFixed(2), area.toFixed(2), circumference.toFixed(2), diameter.toFixed(2)];
  return geometries;
}

rad1 = calcCircleGeometries(Math.random());
rad2 = calcCircleGeometries(Math.random());
rad3 = calcCircleGeometries(Math.random());

circ1 = oneRow(rad1);
el.innerHTML += circ1;
circ2 = oneRow(rad2);
el.innerHTML += circ2;
circ3 = oneRow(rad3);
el.innerHTML += circ3;