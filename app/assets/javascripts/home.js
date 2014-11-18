$.ajax({
  url: "http://daretodiscover.net/wine",
    success: function(wines){
      var ul = $("<ul>").attr("id", "wines");
      console.log(wines);
      $.each(wines, function(key, wineList){
        $.each(wineList, function(key, wine){
        // if (key == "name") {
          console.log(key, wine);
          var wineHTML = key + ": " + wine + "<br>";
          ul.append(wineHTML);
          // };
        })
      });
      console.log(ul);
      $('.wines').append(ul);
    }
});

// $.ajax({
//   url: "http://daretodiscover.net/wine",
//         success: function(response){
//           var ul = $("<ul>").attr(key, wine);
//           var wine = $.each(response, function(key, wine){
//             console.log(wine);
//           })
//           $('.wine').append(wine);
//         }

//     // $('.wine').empty();
    
//     // $.each(function(wine){
//     //   var
//     // })

// });

// document.createElement("ul")

// $("#container").empty();
//   var ul = $("<ul>").attr("id", "books");
//   books.forEach(function(book){
//     var bookHTML = HandlebarsTemplates["books/book"](book);
//     ul.append(bookHTML);