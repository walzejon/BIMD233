var myKey = "b5ef8496f57a4cc19d6de6465e089301";
var myUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=b5ef8496f57a4cc19d6de6465e089301";
var articleNum = 0;
var totalAr = 0;
var articleData ="";
var req = new Request(myUrl);
fetch(req)
  .then(response => {
    return response.json();
  })
  .then(function(data) {
    totalAr = data.totalResults;
    if (totalAr > 1) {
      $("#there").text("There are " + data.totalResults + " articles right now.");
    } else {
      $("#there").text("There is " + data.totalResults + " article right now.");
    }
    articleData=data.articles;
    publish(articleData[articleNum]);
  });

function publish(data) {
  $("#title").text(data.title);
  $("#author").text("Author: " +data.author);
  $("#aticleStuff").text(data.content);
  $("#aticleStuff").append(" To read full article go to <a href='" + data.url + "' target='_blank'>This Link</a>");
  $("#image").attr("src", data.urlToImage);
  $("#artN").text("Article " + (articleNum + 1) + "/" + totalAr )
}



$("#prev").click(function() {
  if (articleNum > 0) {
    articleNum = articleNum - 1;
  }
  publish(articleData[articleNum]);
  console.log(articleNum);
});
$("#next").click(function() {
  if (articleNum < totalAr) {
    articleNum = articleNum + 1;
  }
  publish(articleData[articleNum]);
  console.log(articleNum);
});

// angular
//   .module("news-app", []);
//   .controller("newsController", function($scope) {
//     $scope.number = "articleNum";
//   }
// });
// $.ajax({
//   url: news,
//   dataType: "json",
//   error: function(e) {
//   },
//   success: function(data) {
//   console.log("succes", data.status, data.articles[0].title);
//    var title = data.articles[0].title;
//   }
// });

// $('#hit-me').click(function() {

//   $.ajax({
//       url: url,
//       success: function(data) {
//         var bc = JSON.parse(data);
//         var headline = bc.articles.title;
//         console.log(bc);
//       }
//     });
// });