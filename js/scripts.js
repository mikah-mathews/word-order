$(document).ready(function() {


  $("form#user-input").submit(function(event) {

    var rawInput = $("#user-text").val();
    var input = rawInput.split(" ");
    var words = [];
    var count = [];
    var index = 0;
    var wordIndex = 0;

    input.forEach(function(item) {
      if(!words.includes(item)) {
        words.push(item);
        count.push(1);
      }
      else {
        wordIndex = 0;
        words.forEach(function(word) {
          if(word === item) {
            count[wordIndex]++;
          }
          wordIndex++;
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