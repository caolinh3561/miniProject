(function () {
  // Back to Top - by CodyHouse.co
  var backTop = document.getElementsByClassName("js-cd-top")[0],
    offset = 1000, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 350, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 0,
    scrolling = false;

  if (backTop) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkBackToTop, 250)
          : window.requestAnimationFrame(checkBackToTop);
      }
    });

    //smooth scroll to top
    backTop.addEventListener("click", function (event) {
      event.preventDefault();
      !window.requestAnimationFrame
        ? window.scrollTo(0, 0)
        : Util.scrollTo(0, scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset
      ? Util.addClass(backTop, "cd-top--is-visible")
      : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
    windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
    scrolling = false;
  }
})();

// sticky for header

window.onscroll = function () {
  stickyFunction();
};

var header = document.getElementById("header");
function stickyFunction() {
  if (window.pageYOffset > 400) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
