require("@rails/ujs").start();
require("turbolinks").start();
require("channels");
global.jQuery, global.$ = require("jquery");

document.addEventListener('turbolinks:load', () => {
    console.log("JQuery ok!")
});