const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkbox)
function checkbox() {
  const triggeredBottom = window.innerHeight - 100
  boxes.forEach(box => {
    boxTop = box.getBoundingClientRect().top
    if (boxTop < triggeredBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}