//Partendo da un index.html e style.css, animo i comandi avanti e indietro del carousel

$(document).ready(function () {
  $(".next").click(forwardImg);
  $(".prev").click(previousImg);

  //FUNZIONI
  //funzione next image
  function forwardImg() {
    //console.log("Hai cliccato a dx");
    var activeImg = $(".active");
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
    var activeImg = $(".active");
    activeImg.removeClass("active");
    if (activeImg.hasClass("first")) {
      $("img.last").addClass("active");
    } else {
      activeImg.prev("img").addClass("active");
    }
  }
});
