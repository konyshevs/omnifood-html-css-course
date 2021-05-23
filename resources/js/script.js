$(document).ready(function () {
  /* Sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction === "down") $("nav").addClass("sticky");
      else $("nav").removeClass("sticky");
    },
    {
      offset: "60px",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--sections-plans").offset().top,
      },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      500
    );
  });

  /* Navigation scroll */
  $(".main-nav").click(function (e) {
    e.preventDefault();
    if (e.target.classList.contains("main-nav-btn")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

  /* Animation on scroll */
  $(".js--wp-1").waypoint(
    function () {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-2").waypoint(
    function () {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );

  $(".js--wp-3").waypoint(
    function () {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-4").waypoint(
    function () {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    { offset: "50%" }
  );

  /*  Mobile navigation  */

  $(".js--mobile-nav-icon").click(function () {
    $(".js--main-nav").slideToggle(200);

    const mobileNavIcon = $(".js--mobile-nav-icon  ion-icon");
    if (mobileNavIcon.attr("name") === "menu")
      mobileNavIcon.attr("name", "close");
    else mobileNavIcon.attr("name", "menu");
  });
});
