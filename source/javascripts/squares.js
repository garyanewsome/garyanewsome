// Random Stars
var generateStars = function(){
    
    var $squares_backdrop = $(".squares_backdrop");
    var iterator = 0;
    
    while (iterator <= 100){
        var xposition = Math.random();
        var yposition = Math.random();
        var square_type = Math.floor((Math.random() * 5) + 1);
        var position = {
            "x" : $squares_backdrop.width() * xposition,
            "y" : $squares_backdrop.height() * yposition,
        };
        
        $('<div class="square square-type' + square_type + '"></div>').appendTo($squares_backdrop).css({
            "top" : position.y,
            "left" : position.x
        });
        
        iterator++;
    }
    
};

generateStars();
