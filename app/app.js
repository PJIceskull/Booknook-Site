function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    }).fail(function () {
      console.log("Page not found");
      alert("Page not found");
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  }
}


/**** responsive nav 

function initListeners() {

  let displayMobNav = false;

  $(window).on("resize", function (e) {
    //console.log($(window).width());

    if ($(window).width() >= 768) {
      $(".nav-links").removeClass("mob-nav");
      $(".nav-links").addClass("hide");
      displayMobNav = false;
    } else {
      $(".nav-links").removeClass("hide");
    }
  });

  $(".hamburger-nav").on("click", function(e) {
    if (displayMobNav) {
      $(".nav-links").removeClass("mob-nav");
     // $(".nav-links").addClass("hide");
      displayMNav = false;
    } else {
      $(".nav-links").addClass("mob-nav");
      //$(".mob-nav").removeClass("hide");

      displayMobNav = true;
    }
  });
}
**/
  


function initListeners() {
  $("#read-me").on("click", (e) => {
      $("#modal").toggle();
  });

  //cancel button
  $(".close").on("click", (e) => {
      $("#modal").toggle();
  });

}


function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}


// modal
function initModalListeners() {
  $("#login").on("click", (e) => {
      e.preventDefault();
      $("#modal").addClass("active");
  });

  // Cancel button
  $(".close").on("click", (e) => {
      $("#modal").removeClass("active");
  });

  //submit
  $("#close-cancel").on("click", (e) => {
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successful!'
        });
      
        //hide modal on login
      $("#modal").removeClass("active");
  });
  
}

  
$(document).ready(function () {
  initModalListeners();
  initListeners();
  initURLListener();
});
