//Partendo da un index.html e style.css, animo i comandi avanti e indietro del carousel immagini

$(document).ready(function () {
  //clicco freccia destra e sinistra
  $(".next").click(forwardImg);
  $(".prev").click(previousImg);

  //keybord arrow next and previous
  $(document).keyup(function (e) {
    var right = 39;
    var left = 37;
    if (e.keyCode == right) {
      forwardImg();
      circlesIndexForw();
    } else if (e.keyCode == left) {
      previousImg();
      circlesIndexPrev();
    }
  });

  //circles next and previous
  $(".next").click(circlesIndexForw);
  $(".prev").click(circlesIndexPrev);

  //click diretto su cerchi
  $("i").click(circlesClick);

  //FUNZIONI

  //funzione next image
  function forwardImg() {
    var activeImg = $("img.active");
    activeImg.removeClass("active");
    //se img ha la classe
    if (activeImg.hasClass("last")) {
      $("img.first").addClass("active");
    } else {
      activeImg.next("img").addClass("active");
    }
  }

  //funzione per passare all'immagine precedente
  function previousImg() {
    var activeImg = $("img.active");
    activeImg.removeClass("active");
    if (activeImg.hasClass("first")) {
      $("img.last").addClass("active");
    } else {
      activeImg.prev("img").addClass("active");
    }
  }

  //funzione per pallino successivo
  function circlesIndexForw() {
    var activeCircle = $("i.active");
    activeCircle.removeClass("active");
    if (activeCircle.hasClass("last")) {
      $("i.first").addClass("active");
    } else {
      activeCircle.next("i").addClass("active");
    }
  }

  //funzione per pallino precedente
  function circlesIndexPrev() {
    var activeCircle = $("i.active");
    activeCircle.removeClass("active");
    if (activeCircle.hasClass("first")) {
      $("i.last").addClass("active");
    } else {
      activeCircle.prev("i").addClass("active");
    }
  }

  //funzione click pallini
  function circlesClick() {
    var activeCircle = $("i.active");
    activeCircle.removeClass("active");
    var activeImg = $("img.active");
    activeImg.removeClass("active");
    $("i").click(function () {
      $(this).addClass("active");
    });
  }
});
