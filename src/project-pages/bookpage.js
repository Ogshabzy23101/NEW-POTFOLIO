const pageTurn = document.querySelectorAll('.btn')

pageTurn.forEach((btn, index) => {
 btn.addEventListener('click', (e) => {
  const pageId = e.currentTarget.dataset.page
  const page = document.getElementById(pageId)
  if (page.classList.contains('turn')) {
   page.classList.remove('turn')
   page.style.zIndex = 30 - index
  } else {
   page.classList.add('turn')
   page.style.zIndex = 30 + index
  }
 })
})