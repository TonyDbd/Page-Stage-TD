
// NAVBAR ************************************************
    // Effet Header Menu visible
    $(document).ready(function() {
        $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
        });
    });

    // Scroll Effet
    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('nav').addClass('black');
        }
        else {
            $('nav').removeClass('black');
        }
    })

//  Logo Burger du Menu
function cross(x) {
    x.classList.toggle("change");
  }
// FIN NAVBAR ************************************************

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

// BUTTON BACK TO TOP
  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


// SECTION STAGE *********************************************
    //Image Objectif de stage MODAL
    var modal = document.getElementById("ModalPDF");

    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }
// FIN STAGE ***************************************************