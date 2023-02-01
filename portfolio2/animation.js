function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    menuList.classList.toggle("show-menu");
  }

  const ratio = .1
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1,
    threshold: ratio
  }

  const handleIntersect = function (entries, observer) {
    entries .forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            entry.target.classList.add('reveal2-visible')
            console.log('visible')
          } else {
            entry.target.classList.remove('reveal-visible')
            entry.target.classList.remove('reveal2-visible')
            console.log('invisible')
          }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector('.reveal'));

  const observer2 = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector('.reveal2'));

  

  /*function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

var backgroundPres = document.getElementById("description");
backgroundPres.classList.add("visible");

window.addEventListener("scroll", function() {
    if (isInViewport(backgroundPres)) {
        backgroundPres.classList.add("visible");
    } else {
        backgroundPres.classList.remove("visible");
    }
});*/
