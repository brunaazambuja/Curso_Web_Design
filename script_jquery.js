$(function(){
    $('#esconder').click(function(){
        $('#texto')
            .hide()
            .delay(2000)
            .fadeIn(1000);
    });

    $('#vermelho').click(function(){
        $('#texto').css("color", "red");
    });

    $('#azul').click(function(){
        $('#texto').css("color", "blue");
    });


    $('#back').click(function(){
        $('#texto').css({color: "black", backgroundColor: "rgba(0, 0, 0, 0)"});
        $('#mensagem')
            .text("Padrão recuperado.")
            .css({color: "purple", border: "1px solid black", backgroundColor: "white"})
            .delay(2000)
            .fadeOut('slow');
    });

    $('#pink').click(function(){
        $('#texto').css("background-color", "pink");
        $('#texto').fadeOut('slow');
        $('#texto').delay(1000);
        $('#texto').fadeIn('slow');
    });

});