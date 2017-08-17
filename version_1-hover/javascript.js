$(document).ready(function() {
    for(var i = 0; i < 16; i++) {
        for(var j = 0; j < 16; j++) {
            var square = $("<div class='small_boxes'></div>");
            square.appendTo('#box');
        }
    }
});

