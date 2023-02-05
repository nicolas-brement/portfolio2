/* function toggleMenu() {
    var menuList = document.getElementById("menu-list");
    menuList.classList.toggle("show-menu");
  }*/

  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const overlay = document.querySelector("#overlay");
  const nav1 = document.querySelector("#nav-1");
  const nav2 = document.querySelector("#nav-2");
  const nav3 = document.querySelector("#nav-3");
  const nav4 = document.querySelector("#nav-4");
  const nav5 = document.querySelector("#nav-5");
  const navItems = [nav1, nav2, nav3, nav4, nav5];
  
  // Control Navigation Animation
  function navAnimation(val1, val2) {
    navItems.forEach((nav, i) => {
      nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
    });
  }
  
  function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");
  
    //   Toggle: Menu Active
    overlay.classList.toggle("overlay-active");
  
    if (overlay.classList.contains("overlay-active")) {
      // Animate In - Overlay
      overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  
      // Animate In - Nav Items
      navAnimation("out", "in");
    } else {
      // Animate Out - Overlay
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  
      // Animate Out - Nav Items
      navAnimation("in", "out");
    }
  }
  
  // Events Listeners
  hamburgerMenu.addEventListener("click", toggleNav);
  navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
  });

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
