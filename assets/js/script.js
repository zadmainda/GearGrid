const headerBar = document.querySelector('.header_bar');
const headerBarClose = document.querySelector('.header_close');

headerBarClose.addEventListener('click', () =>{
  headerBar.remove()
})

console.log(headerBar)

