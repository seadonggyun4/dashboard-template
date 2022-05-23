
// ========== [ header ] ==========
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


// ========== [ main ] ==========
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

