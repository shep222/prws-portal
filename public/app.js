// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});

auth.onAuthStateChanged(user => {
    if (user) {
        database.on('value', function(data) {
            myData = data.val()
            keys = Object.keys(myData)
            buildProperties();
        })
        // tempBuild()
    } else {
        $('.eachProperty').empty()
        $('.eachProperty').append($(`<h1>You must be signed in to view properties</h1>`))
    }
})


const database = firebase.database().ref().child('property');
var myData
var keys
var id



function buildProperties() {
    $('.eachProperty').empty()
    for (var i = 0; i < keys.length; i++) {

        var address = myData[keys[i]].address
        var city = myData[keys[i]].city
        var state = myData[keys[i]].state
        var zip = myData[keys[i]].zip
        id = keys[i]
        var mainImg
        if (myData[keys[i]].pictures) {
            mainImg = myData[keys[i]].pictures[0]
        } else {
            mainImg = './images/noImg.jpg'
        }

        $('.eachProperty').append($(`<div id="${id}" class="singleProp" >
    <div>
        <img src="${mainImg}" alt="" class="mainImg">
    </div>
       <div class="addressContainer">
           <h1 class="address">${address}</h1>
           <p class="address2">${city}, ${state}  ${zip}</p>
       </div>
    </div>`))
    }
}

var tempDB = myDB[0].property
var tempKeys = Object.keys(tempDB)
function tempBuild(){
    $('.eachProperty').empty()
    for (var i = 0; i < tempKeys.length; i++) {

        var address = tempDB[tempKeys[i]].address
        var city = tempDB[tempKeys[i]].city
        var state = tempDB[tempKeys[i]].state
        var zip = tempDB[tempKeys[i]].zip
        id = tempKeys[i]
        var mainImg
        if (tempDB[tempKeys[i]].pictures) {
            mainImg = tempDB[tempKeys[i]].pictures[0]
        } else {
            mainImg = './images/noImg.jpg'
        }

        $('.eachProperty').append($(`<div id="${id}" class="singleProp" >
    <div>
        <img src="${mainImg}" alt="" class="mainImg">
    </div>
       <div class="addressContainer">
           <h1 class="address">${address}</h1>
           <p class="address2">${city}, ${state}  ${zip}</p>
       </div>
    </div>`))
    }
}



$('body').on('click', '.singleProp', function() {

    id = $(this).attr('id')
    // window.location = "/details.html?id=" + id
    window.location = "file:///Users/johnshepler/AAsoftwareSolutions/prws-portal/public/details.html?id=" + id
})
