function events() {
  // lang
  let enUS = document.querySelector(".langIcon .enUS")
  let zhTW = document.querySelector(".langIcon .zhTW")
  let target = location.href.indexOf("enUS") > -1 ? enUS : zhTW
  target.classList.add("active")

  // menu2
  let showMenu2 = document.querySelector(".showMenu2")
  showMenu2.addEventListener("mouseenter", function () {
    showMenu2.classList.add("hover")
    setTimeout(() => {
      showMenu2.classList.add("active")
    }, 200)
  })
  showMenu2.addEventListener("mouseleave", function () {
    showMenu2.classList.remove("hover")
    showMenu2.classList.remove("active")
  })

  // right Icon
  let rightIcon = document.querySelector(".rightIcon")
  let controllRightIcon = document.querySelector(".controllRightIcon ")
  controllRightIcon.addEventListener("click", () => {
    if ([...rightIcon.classList].includes("active"))
      rightIcon.classList.remove("active")
    else rightIcon.classList.add("active")
  })

  // top
  let toTop = document.querySelector(".toTop")
  toTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
  })

  // mission
  let missionListLis = document.querySelectorAll(".mission .list li")
  let missionbackgrounds = document.querySelectorAll(".mission .background")

  function missionMouseoverHandler(index) {
    missionListLis.forEach((item) => item.classList.remove("active"))
    missionListLis[index].classList.add("active")
    missionbackgrounds.forEach((item) => item.classList.remove("active"))
    missionbackgrounds[index].classList.add("active")
  }
  missionListLis.forEach((item, index) => {
    item.addEventListener("mouseover", () => missionMouseoverHandler(index))
  })

  // services
  let servicesListLis = document.querySelectorAll(".services .list li")
  let servicesContentLis = document.querySelectorAll(".services .content .li")

  function servicesMouseoverHandler(index) {
    servicesListLis.forEach((item) => item.classList.remove("active"))
    servicesListLis[index].classList.add("active")
    servicesContentLis.forEach((item) => item.classList.remove("active"))
    servicesContentLis[index].classList.add("active")
  }
  servicesListLis.forEach((item, index) => {
    item.addEventListener("mouseover", () => servicesMouseoverHandler(index))
  })
  servicesContentLis.forEach((item, index) => {
    item.addEventListener("mouseover", () => servicesMouseoverHandler(index))
  })

  // agency
  let agencyListLis = document.querySelectorAll(".agency .list li")
  let agencyImgsLis = document.querySelectorAll(".agency .imgs li")
  let agencyTitles = document.querySelectorAll(".agency .title")
  let agencyCircle = document.querySelector(".agency .circle")

  function agencyMouseoverHandler(index) {
    agencyListLis.forEach((item) => item.classList.remove("active"))
    agencyListLis[index].classList.add("active")
    agencyImgsLis.forEach((item) => item.classList.remove("active"))
    agencyImgsLis[index].classList.add("active")
    agencyTitles.forEach((item) => item.classList.remove("active"))
    agencyTitles[index + 1].classList.add("active")
    agencyCircle.style.transition = ".3s"
    agencyCircle.classList.remove("active")
    setTimeout(() => {
      agencyCircle.style.transition = "0s"
      agencyCircle.className = "circle"
      agencyCircle.classList.add("backgroundColor", `color${index + 1}`)
      agencyCircle.style.transition = "2s"
      agencyCircle.classList.add("active")
    }, 300)
  }
  agencyListLis.forEach((item, index) => {
    item.addEventListener("mouseover", () => agencyMouseoverHandler(index))
  })
  agencyImgsLis.forEach((item, index) => {
    item.addEventListener("mouseover", () => agencyMouseoverHandler(index))
  })

  // contact
  function postGoogleSheet() {
    let googleLabelArr = ["name", "phone", "mail", "feedback"]

    let name = document.querySelector("#name").value
    let phone = document.querySelector("#phone").value
    let mail = document.querySelector("#mail").value
    let feedback = document.querySelector("#feedback").value

    let formValueArr = [name, phone, mail, feedback]

    let templateParams = {}
    googleLabelArr.forEach((key, index) => {
      templateParams[key] = formValueArr[index]
    })

    emailjs.send("service_1d2eleh", "template_py4pby4", templateParams).then(
      (response) => {
        alert("SUCCESS!")
      },
      (error) => {
        alert("FAILED...")
      }
    )
  }
  document
    .querySelector(".form .button")
    .addEventListener("click", postGoogleSheet)

  // scroll
  window.addEventListener("scroll", function () {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop

    // showMenu2
    let clientHeight = document.querySelector("body").clientHeight
    let showMenu2 = document.querySelector(".showMenu2")
    if (scrollTop + window.innerHeight >= clientHeight - 50)
      showMenu2.style.display = "none"
    else showMenu2.style.display = "flex"
  })
}
