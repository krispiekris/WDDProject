
    $(function () {
      $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height()); //when we reach a certain point
         
      })
    })


    // cases
    
    let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById('countries_stat')
// Fetching the Data from the server

//Fetching the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f93ff5e3afmsh1c47b09be99cc61p1ca087jsnbd673fdc9881"
    }
})
.then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;

})).catch(err => {
    console.log(err);
});

//Fetching The Case by Country Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f93ff5e3afmsh1c47b09be99cc61p1ca087jsnbd673fdc9881"
    }
})

.catch(err => {
    console.log(err);
});


// test accordion
( function( window ) {
    'use strict';
    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    
    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }
    
    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }
    var classie = {
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };
    if ( typeof define === 'function' && define.amd ) {
      define( classie );
    } else {
      window.classie = classie;
    }
    })( window );
    var $ = function(selector){
      return document.querySelector(selector);
    }
    var accordion = $('.accordion');
    accordion.addEventListener("click",function(e) {
      e.stopPropagation();
      e.preventDefault();
      if(e.target && e.target.nodeName == "A") {
        var classes = e.target.className.split(" ");
        if(classes) {
          for(var x = 0; x < classes.length; x++) {
            if(classes[x] == "accordionTitle") {
              var title = e.target;
              var content = e.target.parentNode.nextElementSibling;
              classie.toggle(title, 'accordionTitleActive');
              if(classie.has(content, 'accordionItemCollapsed')) {
                if(classie.has(content, 'animateOut')){
                  classie.remove(content, 'animateOut');
                }
                classie.add(content, 'animateIn');
              }else{
                 classie.remove(content, 'animateIn');
                 classie.add(content, 'animateOut');
              }
              classie.toggle(content, 'accordionItemCollapsed');      
            }
          }
        }  
      }
    });