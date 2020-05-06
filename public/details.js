$(document).ready(function() {

    var myLocation = location.search.slice(4)
    $.get(`https://prws-67487.firebaseio.com/property/${myLocation}/.json`).then(myProperty)

    function myProperty(prop) {
        $('.propAddress').text(prop.address)
        $('.zip').text(prop.zip)

        if(prop.pictures){
            for (var i = 0; i < prop.pictures.length; i++) {
                var myImg = prop.pictures[i]
                $('.imgContainer').append($(`<div class="eachPicDiv"><img src="${myImg}" alt="0" class="detailPic">
                <ion-icon class="rBtn" name="arrow-redo-outline"></ion-icon>
                </div`))
            }
        } else {
            $('.imgContainer').append($(`<h1>THERE WERE NO PICTURES</h1>`))
        }
    }

    // var myProperty = myDB[0].property[myLocation]
    // myTempProperty(myProperty)
    function myTempProperty(prop) {
        $('.propAddress').text(prop.address)
        $('.zip').text(prop.zip)

        if(prop.pictures){
            for (var i = 0; i < prop.pictures.length; i++) {
                var myImg = prop.pictures[i]
                $('.imgContainer').append($(`<div class="eachPicDiv"><img src="${myImg}" alt="0" class="detailPic">
                <ion-icon class="rBtn" name="arrow-redo-outline"></ion-icon>
                </div`))
            }
        } else {
            $('.imgContainer').append($(`<h1>THERE WERE NO PICTURES</h1>`))
        }
    }


    $('body').on('click', '.rBtn', function(){

        var val = parseInt($($(this)).siblings().attr('alt'))
        var DEG = val + 90
        $($(this)).siblings().attr('alt', `${DEG}`)
        $($(this)).siblings().css('transform', `rotate(${DEG}deg)`)
    })
})
