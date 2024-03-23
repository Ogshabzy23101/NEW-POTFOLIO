const getElement = (selector) => {
 const element = document.querySelector(selector)
 if (element) {
  return element
 } else {
  console.log(`sorry ${selector} does not exist, please check !`);
 }
}

const closeBtn = getElement('.closebtn')
const asideBar = getElement('.aside-nav')
const navBtn = getElement('.navbtn')

navBtn.addEventListener('click', () => {
 asideBar.classList.add('show')
})

closeBtn.addEventListener('click', () => {
 if (asideBar.classList.contains('show')) {
  asideBar.classList.remove('show')
 }
})