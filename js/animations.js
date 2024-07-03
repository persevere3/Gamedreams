function animations() {
  function about() {
    // aboutLeftTopImg
    let aboutLeftTopImg = document.querySelector(".about .leftTopImg")
    gsap.to(aboutLeftTopImg, {
      y: 50,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: 2
    })
  }
  about()

  function story() {
    gsap.registerPlugin(ScrollTrigger)
    let sections = gsap.utils.toArray(".story .pannel")
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      scrollTrigger: {
        trigger: ".story",
        endTrigger: ".about2",
        pin: true,
        scrub: 1
      }
    })
  }

  function storyPannel2() {
    // storyPannel2Img
    let storyPannel2Img2 = document.querySelector(".story .pannel2 .img2")
    let storyPannel2Img3 = document.querySelector(".story .pannel2 .img3")
    let storyPannel2Img4 = document.querySelector(".story .pannel2 .img4")
    let storyPannel2Img5 = document.querySelector(".story .pannel2 .img5")
    let storyPannel2Img6 = document.querySelector(".story .pannel2 .img6")
    let storyPannel2Img7 = document.querySelector(".story .pannel2 .img7")
    let storyPannel2Img8 = document.querySelector(".story .pannel2 .img8")
    let storyPannel2Img9 = document.querySelector(".story .pannel2 .img9")
    let storyPannel2Img10 = document.querySelector(".story .pannel2 .img10")
    let storyPannel2Img11 = document.querySelector(".story .pannel2 .img11")
    let storyPannel2Img12 = document.querySelector(".story .pannel2 .img12")
    let storyPannel2Img13 = document.querySelector(".story .pannel2 .img13")

    let storyPannel2ImgSet = {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out"
    }
    let storyPannel2ImgDuration = 2

    gsap.to(
      storyPannel2Img2,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img3,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img4,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img5,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img6,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img7,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img8,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img9,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img10,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img11,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img12,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
    gsap.to(
      storyPannel2Img13,
      Object.assign({}, storyPannel2ImgSet, {
        duration: Math.floor(Math.random() * storyPannel2ImgDuration) + 1
      })
    )
  }
  function storyPannel3() {
    // storyPannel3Img
    let storyPannel3Imgs = document.querySelectorAll(".story .pannel3 .img")

    let storyPannel3ImgSet = {
      opacity: 1,
      repeat: -1,
      stagger: 0.5,
      ease: "power1.out",
      duration: 3
    }
    gsap.to(storyPannel3Imgs, Object.assign({}, storyPannel3ImgSet))
  }
  function storyPannel4() {
    // storyPannel4Img
    let storyPannel4Img2 = document.querySelector(".story .pannel4 .img2")
    let storyPannel4Img3 = document.querySelector(".story .pannel4 .img3")
    let storyPannel4Img4 = document.querySelector(".story .pannel4 .img4")
    let storyPannel4Img5 = document.querySelector(".story .pannel4 .img5")
    let storyPannel4Img6 = document.querySelector(".story .pannel4 .img6")
    let storyPannel4Img7 = document.querySelector(".story .pannel4 .img7")

    let storyPannel4ImgSet = {
      repeat: -1,
      ease: "power1.out"
    }
    let storyPannel4ImgDuration = 2

    gsap.to(
      storyPannel4Img2,
      Object.assign({}, storyPannel4ImgSet, {
        y: 20,
        yoyo: true,
        duration: Math.floor(Math.random() * storyPannel4ImgDuration) + 3
      })
    )

    var t = gsap.timeline({
      repeat: -1,
      ease: "power1.out"
    })
    t.to(storyPannel4Img3, {
      x: -100,
      duration: Math.floor(Math.random() * storyPannel4ImgDuration) + 5
    })
    t.to(storyPannel4Img3, { scaleX: -1, duration: 0 })
    t.to(storyPannel4Img3, {
      x: 0,
      duration: Math.floor(Math.random() * storyPannel4ImgDuration) + 5
    })
    t.to(storyPannel4Img3, { scaleX: 0, duration: 0 })

    gsap.to(
      storyPannel4Img4,
      Object.assign({}, storyPannel4ImgSet, {
        x: 500,
        y: -50,
        opacity: 0,
        duration: 10
      })
    )

    gsap.to(
      storyPannel4Img5,
      Object.assign({}, storyPannel4ImgSet, {
        y: 20,
        yoyo: true,
        duration: Math.floor(Math.random() * storyPannel4ImgDuration) + 2
      })
    )
    gsap.to(
      storyPannel4Img6,
      Object.assign({}, storyPannel4ImgSet, {
        y: 20,
        yoyo: true,
        duration: Math.floor(Math.random() * storyPannel4ImgDuration) + 2
      })
    )
    gsap.to(
      storyPannel4Img7,
      Object.assign({}, storyPannel4ImgSet, {
        rotation: 360,
        ease: "none",
        duration: Math.floor(Math.random() * storyPannel4ImgDuration) + 10
      })
    )
  }
  function storyPannel5() {
    // storyPannel5Img
    let storyPannel5Img2 = document.querySelector(".story .pannel5 .img2")
    let storyPannel5Img3 = document.querySelector(".story .pannel5 .img3")

    let storyPannel5ImgSet = {
      repeat: -1,
      ease: "power1.out"
    }
    let storyPannel5ImgDuration = 2

    gsap.to(
      storyPannel5Img2,
      Object.assign({}, storyPannel5ImgSet, {
        x: -20,
        y: 20,
        yoyo: true,
        duration: Math.floor(Math.random() * storyPannel5ImgDuration) + 3
      })
    )
    gsap.to(
      storyPannel5Img3,
      Object.assign({}, storyPannel5ImgSet, {
        y: -20,
        opacity: 1,
        duration: Math.floor(Math.random() * storyPannel5ImgDuration) + 5
      })
    )
  }
  story()
  storyPannel2()
  storyPannel3()
  storyPannel4()
  storyPannel5()

  function about2Img() {
    // about2Img
    let about2Img1 = document.querySelector(".about2 .img1")
    let about2Img2 = document.querySelector(".about2 .img2")
    let about2Img3 = document.querySelector(".about2 .img3")
    let about2Img4 = document.querySelector(".about2 .img4")
    let about2Img5 = document.querySelector(".about2 .img5")
    let about2Img6 = document.querySelector(".about2 .img6")
    let about2Img7 = document.querySelector(".about2 .img7")
    let about2Img8 = document.querySelector(".about2 .img8")
    let about2Img9 = document.querySelector(".about2 .img9")
    let about2Img10 = document.querySelector(".about2 .img10")
    let about2Img11 = document.querySelector(".about2 .img11")
    let about2Img12 = document.querySelector(".about2 .img12")
    let about2Img13 = document.querySelector(".about2 .img13")

    let about2ImgSet = {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.out"
    }

    gsap.to(
      about2Img1,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img2,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img3,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img4,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img5,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img6,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img7,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img8,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img9,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img10,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img11,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img12,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Img13,
      Object.assign({}, about2ImgSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
  }
  function about2Block() {
    // yellow
    let yellow = document.querySelector(".about2 .yellow")
    let bigTextDreams = document.querySelector(".about2 .bigTextDreams")
    gsap.to(yellow, {
      x: function () {
        let yellowWidth = yellow.getBoundingClientRect().width
        let bigTextDreamsRight = parseInt(
          window.getComputedStyle(bigTextDreams).right
        )

        let x =
          bigTextDreams.getBoundingClientRect().width -
          (yellowWidth - bigTextDreamsRight)
        return x * -1
      },
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: 3
    })
    // purple
    let purple = document.querySelector(".about2 .purple")
    gsap.to(purple, {
      x: function () {
        let yellowWidth = yellow.getBoundingClientRect().width
        let bigTextDreamsRight = parseInt(
          window.getComputedStyle(bigTextDreams).right
        )

        let x =
          bigTextDreams.getBoundingClientRect().width -
          (yellowWidth - bigTextDreamsRight)
        return x / 2
      },
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: 4
    })
    // circle
    let circle = document.querySelector(".about2 .circle")
    gsap.to(circle, {
      scale: 1.85,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: 2
    })
    // subBackground
    let subBackground1 = document.querySelector(".about2 .subBackground1")
    gsap.to(subBackground1, {
      yPercent: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 1
    })
    let subBackground2 = document.querySelector(".about2 .subBackground2")
    gsap.to(subBackground2, {
      yPercent: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 1
    })
  }
  function about2Ball() {
    // about2Ball
    let about2Ball1 = document.querySelector(".about2 .ball1")
    let about2Ball2 = document.querySelector(".about2 .ball2")
    let about2Ball3 = document.querySelector(".about2 .ball3")
    let about2Ball4 = document.querySelector(".about2 .ball4")
    let about2Ball5 = document.querySelector(".about2 .ball5")
    let about2Ball6 = document.querySelector(".about2 .ball6")
    let about2Ball7 = document.querySelector(".about2 .ball7")

    let about2BallSet = {
      y: 30,
      repeat: -1,
      yoyo: true,
      ease: "power1.out"
    }

    gsap.to(
      about2Ball1,
      Object.assign({}, about2BallSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Ball2,
      Object.assign({}, about2BallSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Ball3,
      Object.assign({}, about2BallSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Ball4,
      Object.assign({}, about2BallSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Ball5,
      Object.assign({}, about2BallSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Ball6,
      Object.assign({}, about2BallSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
    gsap.to(
      about2Ball7,
      Object.assign({}, about2BallSet, {
        duration: Math.floor(Math.random() * 4) + 1
      })
    )
  }
  about2Img()
  about2Block()
  about2Ball()

  function missionBackground1() {
    let missionBackground1Img1 = document.querySelector(
      ".mission .background1 .img1"
    )
    gsap.to(missionBackground1Img1, {
      xPercent: 30,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
  }
  function missionBackground2() {
    let missionBackground2Img1 = document.querySelector(
      ".mission .background2 .img1"
    )
    let missionBackground2Img2 = document.querySelector(
      ".mission .background2 .img2"
    )
    let missionBackground2Img3 = document.querySelector(
      ".mission .background2 .img3"
    )
    gsap.to(missionBackground2Img1, {
      opacity: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })

    let missionBackground2Duration = 3
    gsap.to(missionBackground2Img2, {
      yPercent: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: missionBackground2Duration
    })
    gsap.to(missionBackground2Img3, {
      yPercent: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: missionBackground2Duration + 1
    })
  }
  function missionBackground3() {
    let missionBackground3Img1 = document.querySelector(
      ".mission .background3 .img1"
    )
    let missionBackground3Img2 = document.querySelector(
      ".mission .background3 .img2"
    )
    gsap.to(missionBackground3Img1, {
      xPercent: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
    gsap.to(missionBackground3Img2, {
      xPercent: -18,
      yPercent: 18,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
  }
  function missionBackground4() {
    let missionBackground4Img1 = document.querySelector(
      ".mission .background4 .img1"
    )
    gsap.to(missionBackground4Img1, {
      yPercent: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
  }
  function missionBackground5() {
    let missionBackground5Img1 = document.querySelector(
      ".mission .background5 .img1"
    )
    let missionBackground5Img2 = document.querySelector(
      ".mission .background5 .img2"
    )
    let missionBackground5Img3 = document.querySelector(
      ".mission .background5 .img3"
    )
    let missionBackground5Img4 = document.querySelector(
      ".mission .background5 .img4"
    )
    let missionBackground5Img5 = document.querySelector(
      ".mission .background5 .img5"
    )
    let missionBackground5Img6 = document.querySelector(
      ".mission .background5 .img6"
    )
    let missionBackground5Img7 = document.querySelector(
      ".mission .background5 .img7"
    )
    gsap.to(missionBackground5Img1, {
      yPercent: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground5Img2, {
      yPercent: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground5Img3, {
      yPercent: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground5Img4, {
      yPercent: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground5Img5, {
      yPercent: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground5Img6, {
      yPercent: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground5Img7, {
      xPercent: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
  }
  function missionBackground6() {
    let missionBackground6Img1 = document.querySelector(
      ".mission .background6 .img1"
    )
    let missionBackground6Img2 = document.querySelector(
      ".mission .background6 .img2"
    )
    let missionBackground6Img3 = document.querySelector(
      ".mission .background6 .img3"
    )
    gsap.to(missionBackground6Img1, {
      rotation: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground6Img2, {
      rotation: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
    gsap.to(missionBackground6Img3, {
      rotation: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 2
    })
  }
  function missionBackground7() {
    let missionBackground7Img2 = document.querySelector(
      ".mission .background7 .img2"
    )
    let missionBackground7Img3 = document.querySelector(
      ".mission .background7 .img3"
    )
    let missionBackground7Img4 = document.querySelector(
      ".mission .background7 .img4"
    )
    let missionBackground7Img5 = document.querySelector(
      ".mission .background7 .img5"
    )
    let missionBackground7ImgLeft = document.querySelector(
      ".mission .background7 .left"
    )

    gsap.to(missionBackground7Img2, {
      yPercent: -47,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
    gsap.to(missionBackground7Img3, {
      rotation: 360,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
    gsap.to(missionBackground7Img4, {
      rotation: 360,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
    gsap.to(missionBackground7Img5, {
      rotation: 360,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
    gsap.to(missionBackground7ImgLeft, {
      xPercent: 50,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
  }
  missionBackground1()
  missionBackground2()
  missionBackground3()
  missionBackground4()
  missionBackground5()
  missionBackground6()
  missionBackground7()

  function service() {
    let serviceImg2 = document.querySelector(".services .img2")
    gsap.to(serviceImg2, {
      xPercent: 20,
      yPercent: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 4) + 5
    })
  }
  service()

  function contact() {
    let contactImg1 = document.querySelector(".contact .img1")
    gsap.to(contactImg1, {
      rotation: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 2) + 1
    })

    let contactCircle1 = document.querySelector(".contact .circle1")
    let contactCircle2 = document.querySelector(".contact .circle2")
    gsap.to(contactCircle1, {
      yPercent: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 2) + 5
    })
    gsap.to(contactCircle2, {
      xPercent: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      duration: Math.floor(Math.random() * 2) + 5
    })
  }
  contact()
}
