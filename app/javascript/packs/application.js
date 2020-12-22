// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// HW
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

// https://www.youtube.com/watch?v=bn9arlhfaXc
// 小胖有加下面這些，但我不知道這在幹嘛，好像也不需要
// document.addEventListener("turbolinks:load", () =>{
//   $('[data-toggle="tooltip"]').tooltip()
//   $('[data-toggle="popover"]').popover()
// })

// https://www.youtube.com/watch?v=cWkISBYM_0g
// 另一個人講到可能要加這個，但我也不知道這是做什麼用的
// global.$ = jQuery;

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
