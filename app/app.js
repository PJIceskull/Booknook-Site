function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    }).fail(function () {
      console.log("Page not found");
      alert("Page not found");
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
});

function initListeners() {}

$(document).ready(function () {
  initListeners();
});
