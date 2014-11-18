

$.ajax({
  url: "http://daretodiscover.net/wine",
    success: function(wines){
      console.log(wines);
      var ul = $("<ul>").attr("id", "wine");
      // $.each(wines, function(key, wineList){
      //   $.each(wineList, function(key, wine){
      //     console.log(key, wine);
          var template = HandlebarsTemplates["wine"];
          var html = template(wines);
          // console.log(html);
          // var wineHTML = HandlebarsTemplates["templates/wine"]({wine:wine});
          // ul.append(html);

      // console.log(ul);
      $('.wines').append(html);
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