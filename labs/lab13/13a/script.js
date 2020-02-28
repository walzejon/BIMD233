var el = document.getElementById('table_data');
function oneRow(r, garry){
  var s = "";
  s +="<tr><td>" + r + "</td>";
  s +="<td>" + garry[0] + "</td>";
  s +="<td>" + garry[1] + "</td>";
  s +="<td>" + garry[2] + "</td>";
  s +="</tr>";
  return s;
}

var myData1 = new Array("ASA1077", "A319", "Washington Dulles Intl (KIAD)", "San Francisco Intl (KSFO)", "04:32PM", "10:10PM");
var myData2 =  new Array("ASA1088,A320,San Francisco Intl (KSFO),Washington Dulles Intl (KIAD),06:58PM,11:28PM",",");
var myData3 = new Array("ASA1097","A320","Washington Dulles Intl (KIAD)","Los Angeles Intl (KLAX)","02:06PM","07:24PM");
var myData4 = new Array("ASA11","B739","Newark Liberty Intl (KEWR)","Seattle-Tacoma Intl (KSEA)","02:00PM","07:27PM");
var myData5 = new Array("ASA1113","A320","Will Rogers World (KOKC)","Seattle-Tacoma Intl (KSEA)","03:40PM","07:11PM");

function oneRow(garry) {
  var s = "";
  s += "<tr><td>" + garry[0] + "</td>";
  s += "<td>" + garry[1] + "</td>";
  s += "<td>" + garry[2] + "</td>";
  s += "<td>" + garry[3] + "</td>";
  s += "<td>" + garry[4] + "</td>";
  s += "<td>" + garry[5] + "</td>";
  s += "</tr>";
  return s;
}

circ1 = oneRow(myData1);
el.innerHTML += circ1;
circ2 = oneRow(myData1);
el.innerHTML += circ2;
circ3 = oneRow(myData3);
el.innerHTML += circ3;
circ4 = oneRow(myData4);
el.innerHTML += circ4;
circ5 = oneRow(myData5);
el.innerHTML += circ5;


function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function Flight(name, number, takeOff, land, timeT, timeL){
  this.name = name;
  this.number = number;
  this.takeOff = takeOff;
  this.land = land;
  this.timeT = timeT;
  this.timeL = timeL;
  this.flightTime = function(){
    var t1 = new Date(timeT);
    var t2 = new Date(timeL);
    var diff = t1.getTime() - t2.getTime();
    return msToTime(diff);
  }
}
var flightList = [];
flightList.push(Flight(myData1));
flightList.push(Flight(myData2));
flightList.push(Flight(myData3));
flightList.push(Flight(myData4));
flightList.push(Flight(myData5));