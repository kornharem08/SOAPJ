
lekkla()






function showsearch(app) {
    var sort = app.sort(dynamicSort("-installs"));
    var html = ''
    for (var i = 0; i < app.length; i++) {

        html +=
           
        "<div class='card col-2' id='card'>" +
        '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
        '<div class="card-block">' +
        '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
        '<div class="meta">' +
        '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
        '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
        '</div>' +

        '</div>' +
        '<hr style="margin-top:0px;">' +
        '<div class="row">' +
        '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
        '<div class="type">' + sort[i].type + '</div>' +
        '</div>' +
        "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
        '<br>' +
        '</div>' +
        '</div>';
        document.getElementById('wrapper').innerHTML = html;

    } page()
}

function serach(search) {
    console.log(search);
    const filterItems = (needle, heystack) => {
        let query = needle.toLowerCase();
        return heystack.filter(item => item.app.toLowerCase().indexOf(needle) >= 0);
    }
    console.log("55+", filterItems(search, allapp));
    var searchs = filterItems(search.toLowerCase(), allapp);
    showsearch(searchs)
}



function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


function check() {
    var sorted_arr = data.sort();
    var results = [];
    for (var i = 0; i < data.length; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
        } else {
            results.push(sorted_arr[i]);
            console.log(sorted_arr[i]);
            // console.log(results);
            var dropdown = '<div class="col-2" style="color:white ">' + "<a class='dropdown-item' onclick='tong(" + '"' + sorted_arr[i] + '"' + ")'>" + sorted_arr[i] + '</a></div>'
            document.getElementById('dropdown').innerHTML += dropdown;
        }
    }
}

function tong(tong) {
    console.log(tong);
    var type = '<div class="dropdown open"  style ="margin-left:150px">' +
    '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem;"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +

    ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
    "<a  class='dropdown-item' onclick='ContentRating(" + '"' + tong + '"' + "," + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + tong + '"' + "," + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + tong + '"' + "," + '"Teen"' + ")'>" + "Teen" + "</a>" +
    "<a  class='dropdown-item' onclick='ContentRating(" + '"' + tong + '"' + "," + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + tong + '"' + "," + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + tong + '"' + "," + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
    '</div>' +
    '</div>'+
    '<div class="dropdown open"  style ="margin-left:20px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +

        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='Free(" + '"' + tong + '"' + "," + '"Free"' + ")'>" + "Free" + "</a>" + "<a class='dropdown-item' onclick='Free(" + '"' + tong + '"' + "," + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='tong(" + '"' + tong + '"' + ")'>" + "All" + "</a>" +
        '</div>' +
        '</div>';
    document.getElementById('type').innerHTML = type;
    var url = 'http://localhost:8080/store/' + tong;

    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)
            var sort = lekkla.sort(dynamicSort("-installs"));
            var html = ''
            console.log(html);
            
            for (var i = 0; i < sort.length; i++) {
                console.log(sort[i].app);
                var b = sort[i].installs
                var t = new Intl.NumberFormat().format(sort[i].installs)
                var a = parseInt(b);
                html +=
                
                    "<div class='card col-2' id='card'>" +
                    '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                    '<div class="card-block">' +
                    '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                    '<div class="meta">' +
                    '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                    '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                    '</div>' +
                    '</div>' +
                    '<hr style="margin-top:0px;">' +
                    '<div class="row">' +
                    '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                    '<div class="type">' + sort[i].type + '</div>' +
                    '</div>' +
                    "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                    '<br>' +
                    '</div>' +
                    '</div>';

                    
            }






            console.log(html);
            document.getElementById('wrapper').innerHTML = html;
         
            page()
        }
        
    }
    xhr.send();
}
function page() {
    var _elPerPage = 10;//We are going to use this later to set the number of elements to display per page
    var number_of_pages = Math.ceil($('card').length / _elPerPage); //This is used just for this demo to calculate the number of pages
    function stats() {//This is used just for this demo to display the current settings
        if ($('#elPerPage').val() > 0) {
            _elPerPage = $('#elPerPage').val();
        }
        number_of_pages = Math.ceil($('card').length / _elPerPage);
        $('#number_of_pages').text(number_of_pages);
        $('#elements_per_page').text(_elPerPage);
    }
    var senzill = $('#wrapper').senzill( //Start a new senzill-pagination instance
        {
            elPerPage: _elPerPage //Number of elements to display per page
        }
    );
}
var data = []
var allapp = ''
function lekkla() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/store", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // innerText does not let the attacker inject HTML elements.
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)
            allapp = lekkla

            var html = ''
            for (var i = 0; i < lekkla.length; i++) {
                data.push(lekkla[i].category)
            }
            check()
        }
    }
    xhr.send();


}


function httpGet() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/store", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // innerText does not let the attacker inject HTML elements.
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)
            var sort = lekkla.sort(dynamicSort("-installs"));
            var html = ''
            
            for (var i = 0; i < 10; i++) {

                html += '<br>' + 
                    ' <div class="card col-2"  >' +
                    '<img class="card-img-top" src="..." alt="Card image cap">' +
                    '<div class="card-body">' +
                    '<h6 class="card-title">' + sort[i].app + '</h6>' +
                    '</div>' + '<hr>' + '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                    '</div>'
                console.log(html);

                document.getElementById('row').innerHTML = html;
                
                // $('#lekkla').html(html)    
            }
        }
    }
    xhr.send();
}

$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready

    // breakpoint and up  
    $(window).resize(function () {
        if ($(window).width() >= 980) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function () {
                $(this).removeClass("show");
            });

            // do something here
        }
    });

    // document ready  
});

all()


function all() {
    var type = '<div class="dropdown open"  style ="margin-left:150px">' +
    '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem;"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +

    ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
    "<a  class='dropdown-item' onclick='ContentRatingall(" + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Teen"' + ")'>" + "Teen" + "</a>" +
    "<a  class='dropdown-item' onclick='ContentRatingall(" + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
    '</div>' +
    '</div>'+
    '<div class="dropdown open"  style ="margin-left:20px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +

        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='typeall(" + '"Free"' + ")'>" + "Free" + "</a>" + "<a class='dropdown-item' onclick='typeall(" + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='all2()'>" + "All" + "</a>" +
        '</div>' +
        '</div>';
    document.getElementById('type').innerHTML = type;

    var url = 'http://localhost:8080/store'
    
    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)

            var sort = lekkla.sort(function (a, b) { return b - a });
            var html = '';

            for (var i = 0; i < 100; i++) {
                //console.log(sort[i].installs);
                var t = new Intl.NumberFormat().format(sort[i].installs)
                html +=
                   
                "<div class='card col-2' id='card'>" +
                '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                '<div class="card-block">' +
                '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                '<div class="meta">' +
                '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                '</div>' +
                '</div>' +
                '<hr style="margin-top:0px;">' +
                '<div class="row">' +
                '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                '<div class="type">' + sort[i].type + '</div>' +
                '</div>' +
                "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                '<br>' +
                '</div>' +
                '</div>';
            }






            console.log(html);
            document.getElementById('wrapper').innerHTML = html;
           
            page()
        }
    }
    xhr.send();
}
function all2() {
    all()
}

function rating(app) {
    console.log(app);
    var type = '<div class="dropdown open"  style ="margin-left:150px">' +
    '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem;"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +

    ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
    "<a  class='dropdown-item' onclick='ContentRating2(" + '"' + app + '"' + "," + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + app + '"' + "," + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + app + '"' + "," + '"Teen"' + ")'>" + "Teen" + "</a>" +
    "<a  class='dropdown-item' onclick='ContentRating2(" + '"' + app + '"' + "," + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + app + '"' + "," + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + app + '"' + "," + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
    '</div>' +
    '</div>'+
    '<div class="dropdown open"  style ="margin-left:20px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +

        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='ratFree(" + '"' + app + '"' + "," + '"Free"' + ")'>" + "Free" + "</a>" + "<a class='dropdown-item' onclick='ratFree(" + '"' + app + '"' + "," + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='rating(" + '"' + app + '"' + ")'>" + "All" + "</a>" +
        '</div>' +
        '</div>';
    document.getElementById('type').innerHTML = type;
    var url = 'http://localhost:8080/Rating/'+app;

    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)

            var sort = lekkla.sort(function (a, b) { return b - a });
            var html = '';

            for (var i = 0; i < sort.length; i++) {
                var a = parseInt(sort[i].rating)
               

                    html +=
                    "<div class='card col-2' id='card'>" +
                    '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                    '<div class="card-block">' +
                    '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                    '<div class="meta">' +
                    '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                    '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                    '</div>' +
                    '</div>' +
                    '<hr style="margin-top:0px;">' +
                    '<div class="row">' +
                    '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                    '<div class="type">' + sort[i].type + '</div>' +
                    '</div>' +
                    "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                    '<br>' +
                    '</div>' +
                    '</div>';
                

            } console.log(html);
            document.getElementById('wrapper').innerHTML = html;
            page()





        }
    }
    xhr.send();

}

function Free(c, t) {
    console.log(tong);
    var type ='<div class="dropdown open "  style ="margin-left:150px">' +
    '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +

    ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
    "<a  class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Teen"' + ")'>" + "Teen" + "</a>" +
    "<a  class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>" + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
    '</div>' +
    '</div>'+
     '<div class="dropdown open"  style ="margin-left:20px">' +
    '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +

    ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
    "<a  class='dropdown-item' onclick='Free(" + '"' + c + '"' + "," + '"Free"' + ")'>" + "Free" + "</a>"  + "<a class='dropdown-item' onclick='Free(" + '"' + c + '"' + "," + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='tong(" + '"' + c + '"' + ")'>" + "All" + "</a>" +
    '</div>' +
    '</div>'
    console.log(type)
    document.getElementById('type').innerHTML = type;
    var url = 'http://localhost:8080/store/' + c + "/" + t;

    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)
            var sort = lekkla.sort(dynamicSort("-installs"));
            var html = '';
            console.log(html);

            for (var i = 0; i < sort.length; i++) {
                console.log(sort[i].app);
                var b = sort[i].installs

                var a = parseInt(b);
                html +=
                "<div class='card col-2' id='card'>" +
                '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                '<div class="card-block">' +
                '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                '<div class="meta">' +
                '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                '</div>' +
                '</div>' +
                '<hr style="margin-top:0px;">' +
                '<div class="row">' +
                '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                '<div class="type">' + sort[i].type + '</div>' +
                '</div>' +
                "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                '<br>' +
                '</div>' +
                '</div>';
            }






            console.log(html);
            document.getElementById('wrapper').innerHTML = html;
            page()
        }
    }
    xhr.send();
}


function herff(name) {
    window.location.href = 'userreview.html';
    localStorage.setItem("name", name);
}


function userrv(name,category,contentRating,type,installs,androidVer,lastUpdated,rating) {
    alert(name)
    var res = encodeURI(name);
    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/countries/' + res

    console.log(url);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var result = xhr.responseText;
            var jrresult = JSON.parse(result);
            var t = new Intl.NumberFormat().format(installs)
            var randomnumber=Math.floor(Math.random()*101);
            var table = 
         
         
            '<div class="content ">' +
            '<div class="card-body">' +
            '<div class="row">' +
            '<div class="col-md-4">' +
            '<img src="https://picsum.photos/250/250?image=' + randomnumber + '" class="img img-rounded" style="height:150px, width:550px">' +
            '<p class="text-secondary text-center"></p>' +
            '</div>' +
            '<div class="col-md-8">' +

            '<h2>'+name+'</h2>'+
            '<div class="clearfix"></div>' +
            '<div class="row">' +
            '<div style="margin-left:15px;">'+'<p">' +"Category: "+'&nbsp'+'&nbsp'+'&nbsp'+category + '</p>' +'</div>'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+
            '<div>'+'<p>' +"Contenrating: "+'&nbsp'+'&nbsp'+'&nbsp'+contentRating + '</p>'+'</div>' +
            '</div>' +
            '<div class="row">'+
            '<div style="margin-left:15px;">'+'<p>'+"Downloaded:"+'&nbsp'+'&nbsp'+'&nbsp'+t+"+"+'</p>'+'</div>'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+
            '<div>'+'<p>'+"LastUpadated:"+'&nbsp'+'&nbsp'+'&nbsp'+lastUpdated+'</p>'+'</div>'+
            '</div>'+
            '<div class="row">'+
            '<div style="margin-left:15px;">'+"AndroidVersion:"+'&nbsp'+'&nbsp'+'&nbsp'+androidVer+'</div>'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+
            '<div>'+'<p>'+"Rating:"+'&nbsp'+'&nbsp'+'&nbsp'+rating+'</p>'+'</div>'+
            '</div>' +  
            '<div>'+'<p>'+"Type:"+'&nbsp'+'&nbsp'+'&nbsp'+type+'</p>'+'</div>'+
            '<button type="button" class="btn btn-success">Install</button>'+
            '</div>'+
            '</div>' +
            '</div>' +
            '</div>' ;
         
           

               
            for (var i = 0; i < jrresult.length; i++) {
                var ex = encodeURI(jrresult[i].app);
                if (ex === res) {
                    console.log(jrresult[i].app, name);
                    var z = jrresult[i].sentiment;
                    s='';
                    if(z == "Positive"){
                    z = "I like this ";
                    s = "color:green"
                    }else{
                        z= "I Don't like this "
                        s = "color:red"
                    }
                    var a = Number(jrresult[i].sentimentSubjectivity).toFixed(2);
                    var b = Number(jrresult[i].sentimentPolarity).toFixed(2);
                    var r = Math.random().toString(36).substring(7);
                  
                    table +=
                    
                        '<div class="content ">' +
                        '<div class="card-body">' +
                        '<div class="row">' +
                        '<div class="col-md-2">' +
                        '<img src="123.jpg" class="img img-rounded img-fluid"/>' +
                        '<p class="text-secondary text-center">15 Minutes Ago</p>' +
                        '<p class="text-center" style="'+s+'">' + z + '</p>' +
                        '</div>' +
                        '<div class="col-md-10">' +
                        '<p>' +
                        '<a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>'+r+'</strong></a>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '</p>' +
                        '<div class="clearfix"></div>' +
                        '<p>' + jrresult[i].translatedReview + '</p>' +
                        '<br>' +
                        '<p>' +
                        '<a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>' +
                        '<a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>' +
                        '</p>' +

                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                   

                    
                }      
            } 
            table +='<a href="#" id="loadMore" onclick="q()">Load More</a>'
               document.getElementById("usereview").innerHTML = table;
                console.log(table);
                loadmore()
        }
    }
    xhr.send();
} 
 
function loadmore() {
    if($(".content").length > 1) {
         $(".content").slice(0, 4).show();
        
      }
      else {
        $(".content").slice(0, 1).show();
        $("#loadMore").text("No Comment").addClass("noContent");
     }
    
      
   }

   
    function q() {

        $(".content:hidden").slice(0, 4).slideDown();
        if($(".content:hidden").length == 0) {
          $("#loadMore").text("No Content").addClass("noContent");
        }

      }  

      function ContentRating(c,r) {
        var res = encodeURI(r);
        console.log(tong);
        var type = '<div class="dropdown open "  style ="margin-left:150px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +
    
        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Teen"' + ")'>" + "Teen" + "</a>" +
        "<a  class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating(" + '"' + c + '"' + "," + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
        '</div>' +
        '</div>'+
        '<div class="dropdown open"  style ="margin-left:20px">' +
            '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +
    
            ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
            "<a  class='dropdown-item' onclick='Free(" + '"' + c + '"' + "," + '"Free"' + ")'>" + "Free" + "</a>"  + "<a class='dropdown-item' onclick='Free(" + '"' + c + '"' + "," + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='tong(" + '"' + c + '"' + ")'>" + "All" + "</a>" +
            '</div>' +
            '</div>'
        console.log(type)
        document.getElementById('type').innerHTML = type;
        var url = 'http://localhost:8080/contentRat/' + c + "/" + res;
    
        console.log(url);
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var tong = xhr.responseText;
                var lekkla = JSON.parse(tong)
                var sort = lekkla.sort(dynamicSort("-installs"));
                var html = '';
                console.log(html);
    
                for (var i = 0; i < sort.length; i++) {
                    console.log(sort[i].app);
                    var b = sort[i].installs
    
                    var a = parseInt(b);
                    html +=
                        "<div class='card col-2' id='card'>" +
                    '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                    '<div class="card-block">' +
                    '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                    '<div class="meta">' +
                    '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                    '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                    '</div>' +
                    '</div>' +
                    '<hr style="margin-top:0px;">' +
                    '<div class="row">' +
                    '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                    '<div class="type">' + sort[i].type + '</div>' +
                    '</div>' +
                    "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                    '<br>' +
                    '</div>' +
                    '</div>';
                }
    
    
    
    
    
    
                console.log(html);
                document.getElementById('wrapper').innerHTML = html;
                page()
            }
        }
        xhr.send();
      }
      function typeall(t) {
          console.log(t);
          
        var type = '<div class="dropdown open"  style ="margin-left:150px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem;"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +
    
        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='ContentRatingall(" + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Teen"' + ")'>" + "Teen" + "</a>" +
        "<a  class='dropdown-item' onclick='ContentRatingall(" + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
        '</div>' +
        '</div>'+
        '<div class="dropdown open"  style ="margin-left:20px">' +
            '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +
    
            ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
            "<a  class='dropdown-item' onclick='typeall(" + '"Free"' + ")'>" + "Free" + "</a>" + "<a class='dropdown-item' onclick='typeall(" + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='all2()'>" + "All" + "</a>" +
            '</div>' +
            '</div>';
        document.getElementById('type').innerHTML = type;
        var res = encodeURI(t);
        var url = 'http://localhost:8080/TypeAll/'+res
        
        console.log(url);
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var tong = xhr.responseText;
                var lekkla = JSON.parse(tong)
    
                var sort = lekkla.sort(function (a, b) { return b - a });
                var html = '';
    
                for (var i = 0; i < 100; i++) {
                    //console.log(sort[i].installs);
                    var t = new Intl.NumberFormat().format(sort[i].installs)
                    html +=
                       
                    "<div class='card col-2' id='card'>" +
                    '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                    '<div class="card-block">' +
                    '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                    '<div class="meta">' +
                    '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                    '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                    '</div>' +
                    '</div>' +
                    '<hr style="margin-top:0px;">' +
                    '<div class="row">' +
                    '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                    '<div class="type">' + sort[i].type + '</div>' +
                    '</div>' +
                    "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                    '<br>' +
                    '</div>' +
                    '</div>';
                }
    
    
    
    
    
    
                console.log(html);
                document.getElementById('wrapper').innerHTML = html;
               
                page()
            }
        }
        xhr.send();
      }
      function ContentRatingall(t) {
        console.log(t);
          
        var type = '<div class="dropdown open"  style ="margin-left:150px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem;"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +
    
        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='ContentRatingall(" + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Teen"' + ")'>" + "Teen" + "</a>" +
        "<a  class='dropdown-item' onclick='ContentRatingall(" + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRatingall(" + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
        '</div>' +
        '</div>'+
        '<div class="dropdown open"  style ="margin-left:20px">' +
            '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +
    
            ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
            "<a  class='dropdown-item' onclick='typeall(" + '"Free"' + ")'>" + "Free" + "</a>" + "<a class='dropdown-item' onclick='typeall(" + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='all2()'>" + "All" + "</a>" +
            '</div>' +
            '</div>';
        document.getElementById('type').innerHTML = type;
        var res = encodeURI(t);
        var url = 'http://localhost:8080/contentRatAll/'+res
        
        console.log(url);
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var tong = xhr.responseText;
                var lekkla = JSON.parse(tong)
    
                var sort = lekkla.sort(function (a, b) { return b - a });
                var html = '';
    
                for (var i = 0; i < sort.length; i++) {
                    //console.log(sort[i].installs);
                    var t = new Intl.NumberFormat().format(sort[i].installs)
                    html +=
                       
                    "<div class='card col-2' id='card'>" +
                    '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                    '<div class="card-block">' +
                    '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                    '<div class="meta">' +
                    '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                    '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                    '</div>' +
                    '</div>' +
                    '<hr style="margin-top:0px;">' +
                    '<div class="row">' +
                    '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                    '<div class="type">' + sort[i].type + '</div>' +
                    '</div>' +
                    "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                    '<br>' +
                    '</div>' +
                    '</div>';
                }
    
    
    
    
    
    
                console.log(html);
                document.getElementById('wrapper').innerHTML = html;
               
                page()
            }
        }
        xhr.send();
      }
      function ContentRating2(r,c) {
          console.log(r,c);
          
        var type = '<div class="dropdown open"  style ="margin-left:150px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem;"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +
    
        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Teen"' + ")'>" + "Teen" + "</a>" +
        "<a  class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
        '</div>' +
        '</div>'+
        '<div class="dropdown open"  style ="margin-left:20px">' +
            '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +
    
            ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
            "<a  class='dropdown-item' onclick='ratFree(" + '"' + r + '"' + "," + '"Free"' + ")'>" + "Free" + "</a>" + "<a class='dropdown-item' onclick='ratFree(" + '"' + r + '"' + "," + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='rating(" + '"' + r + '"' + ")'>" + "All" + "</a>" +
            '</div>' +
            '</div>';
        document.getElementById('type').innerHTML = type;
        var res = encodeURI(c);
        var url = 'http://localhost:8080/RatCon/'+r+'/'+res;
    
        console.log(url);
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var tong = xhr.responseText;
                var lekkla = JSON.parse(tong)
    
                var sort = lekkla.sort(function (a, b) { return b - a });
                var html = '';
    
                for (var i = 0; i < sort.length; i++) {
                    var a = parseInt(sort[i].rating)
                   
    
                        html +=
                        "<div class='card col-2' id='card'>" +
                        '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                        '<div class="card-block">' +
                        '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                        '<div class="meta">' +
                        '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                        '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '<hr style="margin-top:0px;">' +
                        '<div class="row">' +
                        '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                        '<div class="type">' + sort[i].type + '</div>' +
                        '</div>' +
                        "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                        '<br>' +
                        '</div>' +
                        '</div>';
                    
    
                } console.log(html);
                document.getElementById('wrapper').innerHTML = html;
                page()
    
    
    
    
    
            }
        }
        xhr.send();
      }
      function ratFree(r,t) {
        var type = '<div class="dropdown open"  style ="margin-left:150px">' +
        '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem;"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'ContentRating' + '</button>' +
    
        ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
        "<a  class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Adults only 18+"' + ")'>" + "Adults only 18+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Everyone"' + ")'>" + "Everyone" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Teen"' + ")'>" + "Teen" + "</a>" +
        "<a  class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Everyone 10+"' + ")'>" + "Everyone 10+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Mature 17+"' + ")'>" + "Mature 17+" + "</a>"  + "<a class='dropdown-item' onclick='ContentRating2(" + '"' + r + '"' + "," + '"Unrated"' + ")'>" + "Unrated" + "</a>" +
        '</div>' +
        '</div>'+
        '<div class="dropdown open"  style ="margin-left:20px">' +
            '<button class="btn btn-secondary dropdown-toggle " style="min-width:5rem"  type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + 'Type' + '</button>' +
    
            ' <div class="dropdown-menu " style="min-width:0.1rem" aria-labelledby="triggerId" >' +
            "<a  class='dropdown-item' onclick='ratFree(" + '"' + r + '"' + "," + '"Free"' + ")'>" + "Free" + "</a>" + "<a class='dropdown-item' onclick='ratFree(" + '"' + r + '"' + "," + '"Paid"' + ")'>" + "Paid" + "</a>" + "<a class='dropdown-item' onclick='rating(" + '"' + r + '"' + ")'>" + "All" + "</a>" +
            '</div>' +
            '</div>';
        document.getElementById('type').innerHTML = type;
        var res = encodeURI(t);
        var url = 'http://localhost:8080/RatType/'+r+'/'+res;
    
        console.log(url);
    
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var tong = xhr.responseText;
                var lekkla = JSON.parse(tong)
    
                var sort = lekkla.sort(function (a, b) { return b - a });
                var html = '';
    
                for (var i = 0; i < sort.length; i++) {
                    var a = parseInt(sort[i].rating)
                   
    
                        html +=
                        "<div class='card col-2' id='card'>" +
                        '<img class="card-img-top" src="https://picsum.photos/200/300?image=' + i + '">' +
                        '<div class="card-block">' +
                        '<h4 class="card-title mt-3">' + sort[i].app + '</h4>' +
                        '<div class="meta">' +
                        '<h6 style="color:#DF013A">' + sort[i].category + '</h6>' +
                        '<h6 style="color:#FF8000">' + sort[i].contentRating + '</h6>' +
                        '</div>' +
                        '</div>' +
                        '<hr style="margin-top:0px;">' +
                        '<div class="row">' +
                        '<span class="rating-static rating-' + sort[i].rating * 10 + '"></span>' +
                        '<div class="type">' + sort[i].type + '</div>' +
                        '</div>' +
                        "<button type='button' class='btn btn-info' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='userrv(" + '"' + sort[i].app + '"' + "," + '"' + sort[i].category + '"' + "," + '"' + sort[i].contentRating + '"' + "," + '"' + sort[i].type + '"' + "," + '"' + sort[i].installs + '"' + "," + '"' + sort[i].androidVer + '"' + "," + '"' + sort[i].lastUpdated + '"' + "," + '"' + sort[i].rating + '"' + ")'>Detail</button>" +
                        '<br>' +
                        '</div>' +
                        '</div>';
                    
    
                } console.log(html);
                document.getElementById('wrapper').innerHTML = html;
                page()
    
    
    
    
    
            }
        }
        xhr.send();

      }
