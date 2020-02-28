var Explorer = new Array("Ford", "Explorer", 2015, 32000);
var Wrangler = new Array("Jeep", "Wrangler", 1998, 6000);
var Tacoma = new Array("Toyota", "Tacoma", 1997, 4200);
var Tundra = new Array("Toyota", "Tundra", 2012, 30000);
var cars = [Explorer, Wrangler, Tacoma, Tundra];
var el = document.getElementById('bod');

function oneRow(garry) {
  var s = "";
  s += "<tr><td>" + garry[0] + "</td>";
  s += "<td>" + garry[1] + "</td>";
  s += "<td>" + garry[2] + "</td>";
  s += "<td>" + garry[3] + "</td>";
  s += "</tr>";
  return s;
}

circ1 = oneRow(Explorer);
el.innerHTML += circ1;
circ2 = oneRow(Wrangler);
el.innerHTML += circ2;
circ3 = oneRow(Tacoma);
el.innerHTML += circ3;
circ4 = oneRow(Tundra);
el.innerHTML += circ4;