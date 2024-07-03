// const fileinclude = require("gulp-file-include")

//
import gulp from "gulp"

//
import fs from "fs"
import path from "path"

//
import { deleteAsync } from "del"

// html
// import fileinclude from "gulp-file-include"
import i18n from "gulp-html-i18n"

// 壓縮
import cleanCSS from "gulp-clean-css"
import uglify from "gulp-uglify"

// img
import imagemin from "imagemin"
import imageminWebp from "imagemin-webp"

//
import merge from "merge-stream"

// gulp watch
import browser from "browser-sync"

const browserSync = browser.create()

// Clean vendor
function clean() {
  return deleteAsync(["./dist/"])
}

function html() {
  return (
    merge(gulp.src("**.html"))
      // .pipe(
      //   fileinclude({
      //     prefix: "@@",
      //     basepath: "@file"
      //   })
      // )
      .pipe(
        i18n({
          langDir: "./lang",

          createLangDirs: false,

          trace: true
        })
      )
      .pipe(gulp.dest("./dist"))
  )
}

function css() {
  return merge(gulp.src("./css/*.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest(["./dist/css/"]))
    .pipe(browserSync.stream({ match: "**/*.css" }))
}

function js() {
  return merge(gulp.src("./js/*.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"))
  // .pipe(browserSync.stream())
}

async function img() {
  let plugins = [
    imageminWebp({
      quality: 80,
      lossless: true
    })
  ]

  let arr = ["img"]
  function addDir(parent) {
    fs.readdirSync(parent).forEach((item) => {
      const fullPath = path.join(parent, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        arr.push(fullPath.replaceAll("\\", "/") + "/")
        addDir(fullPath)
      }
    })
  }
  addDir("img")

  arr.forEach((item) => {
    imagemin([`${item}*.*`], {
      destination: `./dist/${item}`,
      plugins
    })
  })
}

function svg() {
  return merge(gulp.src("./svg/**/*")).pipe(gulp.dest(["./dist/svg"]))
}

// BrowserSync
function server(done) {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    startPath: "./index-enUS.html",
    port: 3030
  })
  done()
}

// server reload
function browserSyncReload(done) {
  browserSync.reload()
  done()
}

// Watch files
function watchFiles() {
  gulp.watch("./css", css)
  gulp.watch("./js", gulp.series(js, browserSyncReload))
  gulp.watch(["**.html"], gulp.series(html, browserSyncReload))
}

// Define complex tasks
const vendor = gulp.series(clean) //, modules
const build = gulp.series(vendor, gulp.parallel(html, css, js, img, svg))
const watch = gulp.series(build, server, watchFiles)

// Export tasks
export { build, watch }
