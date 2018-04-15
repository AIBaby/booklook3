var bookImgClick;
var i = 0; 

//SHOW DATA OF BOOK//
var showData = function (data) {
  
  var title = data.items[i].volumeInfo.title;
  var authors = data.items[i].volumeInfo.authors[i];
  var description = data.items[i].volumeInfo.description;
  var bookImg = data.items[i].volumeInfo.imageLinks.thumbnail;

  //CREATING ELEMENT HTML//
  var bookHeadline = document.createElement("h1");
  var bookInfo = document.createElement("p");
  var bookImage = document.createElement("IMG");
  var authorName = document.createElement("h3");
  var bookDisplay = document.createElement("li");
  var divider = document.createElement("hr");

  //TURN DATA TO TEXT//
  var bookTitle = document.createTextNode(title);
  var bookAuthors = document.createTextNode(authors);
  var bookDescription = document.createTextNode(description);
  bookImage.setAttribute("src", bookImg);

  //APPEND TEXT TO ELEMENTS//
  bookHeadline.appendChild(bookTitle);
  bookInfo.appendChild(bookDescription);
  authorName.appendChild(bookAuthors);

  //APPEN ELEMENTS TO HTML//
  var book = document.querySelector(".book");
  book.appendChild(bookHeadline);
  book.appendChild(bookInfo);
  book.appendChild(authorName);
  book.appendChild(bookImage);
  book.appendChild(divider);


bookImgClick = bookHeadline;

//NEED TO PUT FUNCTION OUTSIDE - HOW TO CALL TO THE h1 VALUE OUTSIDE??
var clickHeading = document.querySelector(".book IMG");
clickHeading.addEventListener("click", function() {
  document.querySelector(".book").style.display = 'none';
  var book = document.querySelector(".book");
  book.appendChild(bookHeadline);
  book.appendChild(bookInfo);
  book.appendChild(authorName);
  book.appendChild(bookImage);
  book.appendChild(divider);
  console.log("hi")
});
}

//GET BOOK AJAX JUNCTION
var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn.value,
    success: function (data) {
      var i = 0; // WHY THIS i ISNT WORKING??
      showData(data);
      
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    },

  });
};

var fetchName = function () {
  console.log(bookName.value)

  $.ajax({
    
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + bookName.value,
    
    success: function (data) {
      for(i=0; i<10; i++){
      
      showData(data);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    },

  });
};

//GET ISBN TEXT INPUT//
var isbn = document.getElementById("isbn1");

//GET BOOK BY NAME WITH TEXT INPUT//
var bookName = document.getElementById("bookNameSearch");

//BUTTON//
//NAME SERACH
var buttonBookName = document.getElementById("myBtnName");
buttonBookName.addEventListener("click", fetchName);
//ISNB SEARCH
var buttonIsbn = document.getElementById("myBtnIsbn");
buttonIsbn.addEventListener("click", fetch);


//NOT WORKING// NEED THE LISTEN//
// var clickHeading = document.querySelector(".book IMG");

// bookImgClick.addEventListener("click", function() {
//   console.log("hi")
// });

// var clickP = querySelectorall("p");
// var clickImage = querySelectorall("img")
// var clickAuthor = querySelector("h3")
