$(document).ready(function(){
    $("#gallery-toggle-button").mouseenter(function(){
        $("#gallery-toggle-button").css({
                                            'backgroundColor' : 'white',
                                            'transition-duration' : "1s"
                                    })
        $("#gallery-toggle-button > h3").css({
                                        'color' : 'rgb(20, 20, 20)',
                                        'transition-duration' : "1s"
                                    })
    })

    $("#gallery-toggle-button").mouseleave(function(){
        $("#gallery-toggle-button").css({
            'backgroundColor' : 'rgb(20, 20, 20)',
            'transition-duration' : "1s"
        })

        $("#gallery-toggle-button > h3").css({
            'color' : 'white',
            'transition-duration' : "1s"
        })
    })

    $("#gallery-toggle-button").click(function(){
        $("#gallery-picture-container").css('height', 'auto')
        $("#gallery-toggle-button").css('display', 'none')
    })
})