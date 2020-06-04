//mobile nav burger
    function openMobileNav() {
        const icon = document.querySelector('.nav-burger__btn')
        const header = document.querySelector('.header')
        const container = document.querySelector('.main-content')
        icon.addEventListener('click', e => {
            icon.classList.toggle('change')
            header.classList.toggle('active')
        })
    }
    openMobileNav()


// sticky navbar
    function stickyNav() {
        const header = document.querySelector('.header')

        document.addEventListener('scroll', e => {
            if (window.scrollY >= 1300 || header.classList.contains('active')) {
                header.classList.add('fixed')
            } else {
                header.classList.remove('fixed')
            }
        })
        if(header.classList.contains('fixed')) {

        }

    }
    stickyNav()
//

function worksFilter() {
    const buttons = document.querySelectorAll(".works--filter-btn");
    const filteredCards = document.querySelectorAll(".works-cards__item");

    buttons.forEach( btn => {
        btn.addEventListener('click', event => {
            let id = event.target.id;
            filteredCards.forEach( card => {
                if( id !== card.dataset.type) {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
                };
                if(id === 'all') {
                    card.style.display = 'block';
                }
            })
        })
    })
}

worksFilter()

// Slick slider for Study Block
$(document).ready(function(){
  $('.study-slider').slick({
    appendArrows: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    dots:true,
    slidesToShow: 1,
    variableWidth:true,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  infinite: true,
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  // variableWidth:false
              }
          },
          {
              breakpoint: 860,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth:false,
                  centerPadding: '40px',
                  mobileFirst: true
              }
          },
          {
              breakpoint: 650,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth:false,
                  centerPadding: '20px',
                  mobileFirst: true
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth:false,
                  centerPadding: '5px',
                  mobileFirst: true
              }
          }],
  });
});

// Counter for stats block

function counterHandler() {
    function counter(id, start, end, duration) {

        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    function scrollEvent(e) {
        const statsBlock = document.querySelector('section.stats')
        let pos = statsBlock.getBoundingClientRect();
        let top = pos.top + pageYOffset;
        let bottom = pos.bottom + pageYOffset;
        if (window.pageYOffset >= top - 400 && window.pageYOffset <= bottom - 300) {
            counter("counter1", 0, 861, 2000);
            counter("counter2", 0, 216, 2000);
            counter("counter3", 0, 777, 2000);
            counter("counter4", 0, 442, 2000);
            counter("counter5", 0, 114, 2000);
            document.removeEventListener('scroll', scrollEvent);
        }
    }

    document.addEventListener("scroll", scrollEvent);
}
counterHandler()

// sidebar nav
// function sideNav() {
//     const sidebarNavigation = document.querySelector('.side-nav')
//     document.addEventListener('scroll', (e) => {
//       return   window.pageYOffset >= 1000 ? sidebarNavigation.style.display = 'initial' : sidebarNavigation.style.display = 'none';
//     })
// }
// sideNav()

// sroller to top
function scrollToTop() {
    const btn = document.querySelector('.scroll-toTop-btn');
    document.addEventListener('scroll', function (e) {
        window.pageYOffset > 1350 ? btn.style.display = 'block' : btn.style.display = 'none';
    })
    btn.addEventListener('click', function (e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
scrollToTop()

//
