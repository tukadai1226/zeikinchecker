const header = () => {
const CLASSNAME = "-visible";
const TIMEOUT = 1000;
const $target = $(".title");


setInterval(() => {
  $target.addClass(CLASSNAME);
}, TIMEOUT * 2);




};
window.addEventListener("turbo:load", header);
window.addEventListener("turbo:render", header);
