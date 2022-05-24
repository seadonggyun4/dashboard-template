
// ========================= [ header ] =========================
const lists = document.querySelectorAll('.header-nav li')

function activeLink(){
  lists.forEach(list => {
     list.classList.remove('clicked');

     this.classList.add('clicked')
  })
}

lists.forEach(list => {
  list.addEventListener('click', activeLink)
})


// ========================= [ main ] =========================
const toggleMain = document.querySelector('.topbar .toggle')
const toggleHeader = document.querySelector('.header-nav .toggle')
const headerNav = document.querySelector('.header .header-nav')
const main = document.querySelector('.main')

toggleMain.addEventListener('click', () => {
  headerNav.classList.toggle('active')
  main.classList.toggle('active')
})

toggleHeader.addEventListener('click', () => {
  headerNav.classList.toggle('active')
  main.classList.toggle('active')
})

// ========================= [ scroll Magic for used-status] =========================
var controller = new ScrollMagic.Controller();

const usedBxes = document.querySelectorAll('.used-status .usedBx')

usedBxes.forEach((usedBx) => {
  new ScrollMagic
    .Scene({
      triggerElement: usedBx, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //감시할 요소를 인지, 식별하는 지점을 명시 -> 뷰포트 최상단 0 ~ 뷰포트 최하단 1 로 환산한다. 
      reverse:false //한번만 실행
    })
    .setClassToggle(usedBx, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
    .addTo(new ScrollMagic.Controller());
})

