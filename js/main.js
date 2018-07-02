// 'use strict';
"use strict";


    ///////////////////////
      // toggle cart view

      function hiding() {
          var hide = document.getElementById("theCartContainer");
          if (hide.style.display === "none") {
              hide.style.display = "block";
          } else {
              hide.style.display = "none";
          }
      }
////////////////////////////////////
  // navbar
function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

/////////////////////////////////////////////
  // smooth scroll button

  // When the user scrolls down 80px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
