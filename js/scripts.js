$(document).ready(function() {


  $("form#user-input").submit(function(event) {

    var input = $("#user-text").val();
    var items = input.split(" ");
    var words = [];
    var count = [];
    var index = 0;

    items.forEach(function(item) {
      if(!words.includes(item)) {
        words.push(item);
        count.push(1);
      }
      else {
        index = 0;
        words.forEach(function(word) {
          if(word === item) {
            count[index]++;
          }
          index++;
        });
      }
    });

    index = 0;
    words.forEach(function(word) {
      $("#results").append(word + ": " + count[index] + "<br>");
      index++;
    });
    
    event.preventDefault();
  });
});