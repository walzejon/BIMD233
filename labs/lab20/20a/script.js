var code = "" + document.getElementById("currency").value;

var myURL = "https://api.coindesk.com/v1/bpi/currentprice/" + code + ".json";

$(currency).change(function() {
  code = "" + document.getElementById("currency").value;
  myURL = "https://api.coindesk.com/v1/bpi/currentprice/" + code + ".json";
  // reset map?
});

var myData = [];

var myVar = setInterval(function() {
  $.ajax({
    url: myURL,
    success: function(data) {
      var bc = JSON.parse(data);
      var price = parseFloat(bc.bpi[code].rate.replace(/,/g, ""));
      console.log(price);
      var name = bc.bpi[code].description;
      $("#price").text(price);
      if (myData.length >= 10) {
        myData.shift();
      }
      //bc.time["updated"]
      myData.push({ time: Date.now(), value: price });
      console.log(myData);
      graph.setData(myData);
      //graph.redraw();
    }
  });
}, 5000);

// function updateData(price) {
//   let newTimeEvent = {
//     time: date.now(),
//     price:price
//   };

var graph = new Morris.Line({
  // ID of the element in which to draw the chart.
  element: "myChart",
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: "",
  // The name of the data record attribute that contains x-values.
  xkey: "time",
  // A list of names of data record attributes that contain y-values.
  ykeys: ["value"],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ["Value"]
});

// var morrisChartObj = {
//   // ID of the element in which to draw the chart.
//   element: "myChart",
//   // Chart data records -- each entry in this array corresponds to a point on
//   // the chart.
//   data: "",
//   // The name of the data record attribute that contains x-values.
//   xkey: "time",
//   // A list of names of data record attributes that contain y-values.
//   ykeys: ["value"],
//   // Labels for the ykeys -- will be displayed when you hover over the
//   // chart.
//   labels: ["Value"]
// };