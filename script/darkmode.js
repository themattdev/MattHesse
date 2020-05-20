var darkMode = true;

function disableSelection(target){
    if (typeof target.onselectstart!="undefined") // if IE
        target.onselectstart=function(){return false}
    else if (typeof target.style.MozUserSelect!="undefined") // if Firefox
        target.style.MozUserSelect="none";
    else // others
        target.onmousedown=function(){return false;}

    target.style.cursor = "default";
}

$(document).ready(function(){

    disableSelection(document.getElementById("darkModeButton"));

    $("#darkModeButton").click(function(){
      
        if(darkMode == true){
            darkMode = false;
            $('body').addClass('bodyLight');

            $('a').addClass('light');
            $('.line').addClass('lineLight');
            $('.line').removeClass('line');

            $('.innerLine').addClass('innerLineLight');
            $('.innerLine').removeClass('innerLine');

            $('.key').addClass('keyLight');
            $('.key').removeClass('key');

            $('.number').addClass('numberLight');
            $('.number').removeClass('number');

            $('.var').addClass('varLight');
            $('.var').removeClass('var');

            $('.varName').addClass('varNameLight');
            $('.varName').removeClass('varName');

            $('.value').addClass('valueLight');
            $('.value').removeClass('value');

            $('.comment').addClass('commentLight');
            $('.comment').removeClass('comment');
        }
        else{
            darkMode = true;
            $('body').removeClass('bodyLight');
            $('a').removeClass('light');

            $('.lineLight').addClass('line');
            $('.lineLight').removeClass('lineLight');

            $('.innerLineLight').addClass('innerLine');
            $('.innerLineLight').removeClass('innerLineLight');

            $('.keyLight').addClass('key');
            $('.keyLight').removeClass('keyLight');

            $('.numberLight').addClass('number');
            $('.numberLight').removeClass('numberLight');

            $('.varLight').addClass('var');
            $('.varLight').removeClass('varLight');

            $('.varNameLight').addClass('varName');
            $('.varNameLight').removeClass('varNameLight');

            $('.valueLight').addClass('value');
            $('.valueLight').removeClass('valueLight');

            $('.commentLight').addClass('comment');
            $('.commentLight').removeClass('commentLight');
        }
    });
});
