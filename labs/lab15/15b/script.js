var teams = [];
teams.push({
  name: "Oregon",
  con: "8-1",
  overall: "12-2",
  lastg: "W 28-27 WIS"
});
teams.push({
  name: "California",
  con: "4-5",
  overall: "8-5",
  lastg: "W 35-20 ILL"
});
teams.push({
  name: "Washington",
  con: "4-5",
  overall: "8-5",
  lastg: "W 38-7 BSU"
});
teams.push({
  name: "Oregon State",
  con: "4-5",
  overall: "5-7",
  lastg: "L 10-24 ORE"
});
teams.push({
  name: "Washington State",
  con: "3-6",
  overall: "6-7",
  lastg: "L 21-31 AFA"
});
teams.push({
  name: "Stanford",
  con: "3-6",
  overall: "4-8",
  lastg: "L 24-45 ND"
});
var count = 0;
function addToPanel(team) {
  count++;
  let tab = document.getElementById(count);
  tab.innerHTML = makeRow(team.name, team.con, team.overall, team.lastg);
}
teams.forEach(addToPanel);

function makeRow(school, con, over, last) {
  let str = "<div class='row'>";
  str += "<div class='col-sm-3 college'>";
  str += school;
  str += "</div>";
  str += "<div class='col-sm-3 conference'>" + con + "</div>";
  str += "<div class='col-sm-3 overall'>" + over + "</div>";
  str += "<div class='col-sm-3 lastGame'>" + last + "</div></div>";
  return str;
}