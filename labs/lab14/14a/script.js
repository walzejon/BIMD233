var wxdata = [];
wxdata.push({
  day: "fri",
  hi: 82,
  lo: 55
});

wxdata.push({ day: "sat", hi: 75, lo: 52 });
wxdata.push({ day: "sun", hi: 69, lo: 52 });
wxdata.push({ day: "mon", hi: 69, lo: 48 });
wxdata.push({ day: "tue", hi: 68, lo: 51 });

function htmlIt(total, next) {
  return "" + total + next;
}
function oneRow(obj) {
  var s = "";
  s += "<tr><td>" + obj.day + "</td>";
  s += "<td>" + obj.hi + "</td>";
  s += "<td>" + obj.lo + "</td>";
  s += "</tr>";
    console.log(s);

  return s;
}
var table = document.getElementById("tabl");
var str = oneRow(wxdata[0]);
str += oneRow(wxdata[1]);
str += oneRow(wxdata[2]);
str += oneRow(wxdata[3]);
str += oneRow(wxdata[4]);
table.innerHTML = str;