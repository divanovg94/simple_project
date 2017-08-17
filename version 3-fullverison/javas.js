  $(document).ready(function() {
        var grid = 16;
    for(var i = 0; i < 16; i++) {
        for(var j = 0; j < 16; j++) {
            var square = $("<div class='row'></div>");
            square.appendTo('#box');
        }
    }
    function getRandomColor() {
    var color = '#FFBBAA';
    return color;
}

    var colors = {};
    $(document).on('mouseover', '.row', function()	{
        if (!colors[$(this).index()]) {
	        $(this).css('background-color', getRandomColor());
        	colors[$(this).index()] = true;
        }
    });
});