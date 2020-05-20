var darkMode = true;

$(document).ready(function(){

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
