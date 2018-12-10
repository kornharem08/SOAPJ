
  lekkla() 
  function UserAction(name) {
    console.log(name);

    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/countries'

    console.log(url);
    xhr.open("GET", url, true);


    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var result = xhr.responseText;
            var jrresult = JSON.parse(result);
            var table = '';
            for (var i = 0; i < jrresult.length; i++) {

                if (jrresult[i].app === "Disney Heroes: Battle Mode") {
                    console.log(jrresult[i].app, name);
                    var z = jrresult[i].app;
                    var a = Number(jrresult[i].sentimentSubjectivity).toFixed(2);
                    var b = Number(jrresult[i].sentimentPolarity).toFixed(2);
                    table +=
                        '<div class="card">' +
                        '<div class="card-body">' +
                        '<div class="row">' +
                        '<div class="col-md-2">' +
                        '<img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>' +
                        '<p class="text-secondary text-center">15 Minutes Ago</p>' +
                        '</div>' +
                        '<div class="col-md-10">' +
                        '<p>' +
                        '<a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '<span class="float-right"><i class="text-warning fa fa-star"></i></span>' +
                        '</p>' +
                        '<div class="clearfix"></div>' +
                        '<p>' + jrresult[i].translatedReview + '</p>' +
                        '<br>' +
                        '<p>' + z + '</p>' +
                        '<p>' +
                        '<a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>' +
                        '<a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>' +
                        '</p>' +

                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    document.getElementById("resp").innerHTML = table;
                }
            }

        }
    }
    xhr.send();
}





function showsearch(app) {
    var sort = app.sort(dynamicSort("-installs"));
    var html = ''
    for (var i = 0; i < app.length; i++) {
       
            html +=
            '<div class="card col-2" id="card">'+
            '<img class="card-img-top" src="https://picsum.photos/200/300?image='+i+'">'+
            '<div class="card-block">'+
                
                '<h4 class="card-title mt-3">'+ sort[i].app +'</h4>'+
                '<div class="meta">'+
                    '<h6>' + sort[i].category + '</h6>'+
                   
                '</div>'+
                
            '</div>'+
           
            '<hr>'+
           '<div class="row">'+
            '<span class="rating-static rating-'+sort[i].rating*10+'"></span>'+
            '<div class="type">'+sort[i].type+'</div>'+
            '</div>'+
                '<br>'+
                
            '</div>'+
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

    var url = 'http://localhost:8080/store'
    url += '/' + tong;
    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)
            var sort = lekkla.sort(dynamicSort("-installs"));
            var html = '';

            for (var i = 0; i < sort.length; i++) {
                console.log(sort[i].app);
                var b=sort[i].installs
              
                var a = parseInt(b);
                html +=
                '<div class="card col-2" id="card">'+
                '<img class="card-img-top" src="https://picsum.photos/200/300?image='+i+'">'+
                '<div class="card-block">'+
                    
                    '<h4 class="card-title mt-3">'+ sort[i].app +'</h4>'+
                    '<div class="meta">'+
                        '<h6>' + sort[i].category + '</h6>'+
                       
                    '</div>'+
                    
                '</div>'+
               
                '<hr>'+
               '<div class="row">'+
                '<span class="rating-static rating-'+sort[i].rating*10+'"></span>'+
                '<div class="type">'+sort[i].type+'</div>'+
                '</div>'+
                    '<br>'+
                    
                '</div>'+
            '</div>';
            } 

           




                console.log(html);
            document.getElementById('wrapper').innerHTML = html;
            page()
        }
    }
    xhr.send();
}
function page(){
    var _elPerPage = 10;//We are going to use this later to set the number of elements to display per page
            var number_of_pages = Math.ceil($('card').length / _elPerPage); //This is used just for this demo to calculate the number of pages
            function stats(){//This is used just for this demo to display the current settings
              if($('#elPerPage').val() > 0)
               {
                 _elPerPage = $('#elPerPage').val();
               }
               number_of_pages = Math.ceil($('card').length / _elPerPage);
               $('#number_of_pages').text(number_of_pages);
               $('#elements_per_page').text(_elPerPage);
            }
            var senzill =  $('#wrapper').senzill( //Start a new senzill-pagination instance
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

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   
   // breakpoint and up  
   $(window).resize(function(){
       if ($(window).width() >= 980){	
   
         // when you hover a toggle show its dropdown menu
         $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
          });
   
           // hide the menu when the mouse leaves the dropdown
         $( ".navbar .dropdown-menu" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
     
           // do something here
       }	
   });  
     
   // document ready  
   });

all()


   function all() {

    var url = 'http://localhost:8080/store'
  
    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var tong = xhr.responseText;
            var lekkla = JSON.parse(tong)
           
            var sort =  lekkla.sort(function(a, b){return b - a});
            var html = '';

            for (var i = 0; i < 500; i++) {
                //console.log(sort[i].installs);
    var t=new Intl.NumberFormat().format(sort[i].installs)
                html +=
                '<div class="card col-2" id="card">'+
                '<img class="card-img-top" src="https://picsum.photos/200/300?image='+i+'">'+
                '<div class="card-block">'+
                    
                    '<h4 class="card-title mt-3">'+ sort[i].app +'</h4>'+
                    '<div class="meta">'+
                        '<h6>' + sort[i].category + '</h6>'+t+
                       
                    '</div>'+
                    
                '</div>'+
               
                '<hr>'+
               '<div class="row">'+
                '<span class="rating-static rating-'+sort[i].rating*10+'"></span>'+
                '<div class="type">'+sort[i].type+'</div>'+
                '</div>'+
                    '<br>'+
                    
                '</div>'+
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
 
 var url = 'http://localhost:8080/store'
  
 console.log(url);

 var xhr = new XMLHttpRequest();
 xhr.open("GET", url, true);

 xhr.onreadystatechange = function () {
     if (xhr.readyState == 4) {
         var tong = xhr.responseText;
         var lekkla = JSON.parse(tong)
        
         var sort =  lekkla.sort(function(a, b){return b - a});
         var html = '';

         for (var i = 0; i < sort.length; i++) {
var a= parseInt(sort[i].rating)
if(app==a){

             html +=
             '<div class="card col-2" id="card">'+
             '<img class="card-img-top" src="https://picsum.photos/200/300?image='+i+'">'+
             '<div class="card-block">'+
                 
                 '<h4 class="card-title mt-3">'+ sort[i].app +'</h4>'+
                 '<div class="meta">'+
                     '<h6>' + sort[i].category + '</h6>'+
                    
                 '</div>'+
                 
             '</div>'+
            
             '<hr>'+
            '<div class="row">'+
             '<span class="rating-static rating-'+sort[i].rating*10+'"></span>'+
             '<div class="type">'+sort[i].type+'</div>'+
             '</div>'+
                 '<br>'+
                 
             '</div>'+
         '</div>';
         } 
             
}console.log(html);
         document.getElementById('wrapper').innerHTML = html;
         page()
        




     }
 }
 xhr.send();
 
}