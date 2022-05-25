
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

// ========================= [ filter table] =========================

window.addEventListener('load', () => {
    // isotope 라이브러리 사용
    const grid =  new Isotope("tbody", {
      itemSelector: 'tbody tr', // 적용할 아이템
      columnWidth: 100, // 아티클 요소 넓이 값
      transitionDuration: "0.5s" // 전환되는 속도
  }) //grid로 반환

  const btns = document.querySelectorAll('.recentOrders .cardHeader .btn-wrap .btn')

  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // 함수 중복실행 방지
      const isOn = e.currentTarget.classList.contains('on')
      if(isOn === false){
          activation(e)
      }
    })




      function activation(event){

        //버튼 활성화
        btns.forEach( (btn) => {
            btn.classList.remove('on')
        })
        event.currentTarget.classList.add('on')

        console.log(event.currentTarget)

        // 탐색을 위한 값 a_href 탐색
        const btn_a = event.currentTarget
        const a_href = btn_a.getAttribute('href')

        


        //grid값에 arrange매서드 사용 -> filter에 들어와있는 값을 통해 해당 클래스를 탐색
        grid.arrange({filter: a_href}) 
    }

  })


})