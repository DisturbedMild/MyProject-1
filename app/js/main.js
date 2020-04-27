// function navAncors(item) {
//
// }
// navAncors();
//
// const anchor = document.querySelector('')
//
// const list = document.querySelectorAll('.nav-menu li a');
// console.log(list);
//
// const arrayList = Array.from(list);
// arrayList.forEach( anchor => {
//   anchor.addEventListener( 'click', e=> {
//     console.log(e.target.textContent)
//   } )
// } )
//
// list.addEventListener( 'click', (e) => {
//   return console.log(e.target);
// } )


// filter for works block

const buttons = document.querySelectorAll(".works--filter-btn");
const filteredCards = document.querySelectorAll(".works-cards__item");

function wokrsFilter() {
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

wokrsFilter()

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
    variableWidth:true
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
function sideNav() {
    const sidebarNavigation = document.querySelector('.side-nav')
    document.addEventListener('scroll', (e) => {
      return   window.pageYOffset >= 1000 ? sidebarNavigation.style.display = 'initial' : sidebarNavigation.style.display = 'none';
    })
}
sideNav()





