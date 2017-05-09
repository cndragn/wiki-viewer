$(document).ready(function () {
 
 var stuff = "";
 wikiSearch(stuff);
 
 function wikiSearch(sea) {
   var wikiData = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=meaning&format=json";
   

    $.getJSON(wikiData, function (data) {
      
      var title = data.query.search[0].title;
      var snippet = data.query.search[0].snippet;
      
      //console.log(data.continue.sroffset);

      console.log(title);
      console.log(snippet);


      $('.title').text(title);
      $('.snippet').html(snippet);
    });
 }
 
 
});