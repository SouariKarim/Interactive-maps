const map = document.querySelector('#map')
const paths = document.querySelectorAll('.map__image path')

console.log(paths)

paths.forEach(path => {
  path.addEventListener('mouseenter' , () => {
    const id = path.id.replace('FR-' , '')
    // do something !!
  })
})