let a = document.body.getElementsByTagName("button")[0]

a.addEventListener("click", (e) => {

  e.preventDefault()

  let titlec = title.value
  let descc = desc.value

  localStorage.setItem(titlec, descc)

  heading_5.innerHTML = `${titlec}`
  description.innerHTML = `${descc}`
})

// Delete item in this our todo List

let b = document.body.getElementsByTagName("button")[1]
b.addEventListener("click", (e) => {
  e.preventDefault()

  localStorage.clear()
  heading_5.innerHTML = ""
  description.innerHTML = ""
  local



})




