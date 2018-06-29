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


    /////////////////////////////////////////////////////////////////
    // countUp on homepage

//     function animateValue(id, start, end, duration) {
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current + "+";
//         // obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }
//
//     animateValue("value", 0, 3000, 2000);
//
//     var myOtherFriend = new animateValue("ben", 0, 780, 2000);
//     var myOtherFriend = new animateValue("john", 0, 3120, 2000);
//     var myOtherFriend = new animateValue("nelly", 0, 8765, 2000);

    /////////////////////////////////////////////////////////
// ////////////////////////////////////////
//     // slider
//     var slideIndex = 1;
//       showSlides(slideIndex);
//
//       function plusSlides(n) {
//         showSlides(slideIndex += n);
//       }
//
//       function currentSlide(n) {
//         showSlides(slideIndex = n);
//       }
//
//       function showSlides(n) {
//         var i;
//         var slides = document.getElementsByClassName("mySlides");
//         var dots = document.getElementsByClassName("dot");
//         if (n > slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = " block";
//         dots[slideIndex-1].className += " active";
//       }



// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }
//
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


///////percentage countNum
//
// document.getElementById("counter").('.counter').each(function() {
//   var this = (this),
//       countTo = this.attr('data-count');

  // document.getElementById("counter").({ countNum: this.text()}).animate({
  //   countNum: countTo
  // },
  //
  // {
  //
  //   duration: 8000,
  //   easing:'linear',
  //   step: function() {
  //     $this.text(Math.floor(this."2200"));
  //   },
  //   complete: function() {
  //     $this.text(this."2200");
  //     //alert('finished');
  //   }
  //
  // });
// ('.counter').each(function() {
//   var this = (this),
//       countTo = this.attr('data-count');
//
//   ({ countNum: this.text()}).animate({
//     countNum: countTo
//   },
//
//   {
//
//     duration: 8000,
//     easing:'linear',
//     step: function() {
//       this.text(Math.floor(this.countNum));
//     },
//     complete: function() {
//       this.text(this.countNum);
//       //alert('finished');
//     }
//
//   });



// });
