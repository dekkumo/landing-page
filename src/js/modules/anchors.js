const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', event => {
    event.preventDefault()

    const blockID = anchor.getAttribute('href').substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}