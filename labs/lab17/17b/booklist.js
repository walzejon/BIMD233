$(document).ready(function () {
  // --------- jQuery Data Section ---------
  var book1 = {
    title: "Upheaval",
    author: "Jared Diamond",
    image: "5ce2ce15021b4c1a82430b93.jpeg"
  };
  var book2 = {
    title: "Nine Pints",
    author: "Rose George",
    image: "5ce2cef4021b4c6bdb0e4132.jpeg"
  };
  var book3 = {
    title: "The Future of Capitalism",
    author: "Paul Collier",
    image: "5ce2cfac021b4c1a305c2336.jpeg"
  };
  var book4 = {
    title: "Presidents of War",
    author: "Michael Beschloss",
    image: "5ce2cf74021b4c5cc800d1ce.jpeg"
  };
  var book5 = {
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    image: "5ce2cf2f021b4c6be22f5f55.jpeg"
  };

  var books = new Array();
  books.push(book1);
  books.push(book2);
  books.push(book3);
  books.push(book4);
  books.push(book5);

  var img_ref = {
    url:
      "https://i.insider.com/5a8de646391d948e008b4795?width=1300&format=jpeg&auto=webp",
    src: "https://bit.ly/338TQE6",
    alt: "Bill Gates",
    height: 150,
    width: 250
  };

  var reference = {
    url:
      "https://www.businessinsider.com/bill-gates-book-recommendations-summer-2019-5",
    src: "http://usat.ly/20hirO3",
    alt: "Gates Books",
    text: "BG:5 Books for Summer 2019"
  };
  // --------- jQuery Data Section ---------


  // --------- jQuery Code Section ---------

  // apply bootstrap panel classes
  $('ol').addClass("list-group");
  $('li').addClass("list-group-item");

  //$('img').css('background-image', img_ref.url)

  //add each book to the li's
  //$('li').each(function (i){
    //let dbook = books[i];
    //this.innerText = "<img src='images/" +dbook.image + "'>" + "<p>" + dbook.title + " by " + dbook.author  + ".</p>"
    //this.text((dbook.title) + " by " + (dbook.author));
  //});


  $('li').each(function (i) {
    let dbook = books[i];
    var str = (dbook.title) + " by " + (dbook.author);
    console.log(str);
    $(this).text(str);


    console.log(i);
    if (i % 2 == 1) {
      $(this).addClass('odd');
    } else {
      $(this).addClass('even');
    }
  });
  // --------- jQuery Code Section ---------
});