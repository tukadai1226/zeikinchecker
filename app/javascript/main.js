const main = () => {
const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");
let animationStopped = false;

setTimeout(() => {
  $target.addClass(CLASSNAME); // アニメーションを開始
}, TIMEOUT);
};
window.addEventListener("turbo:load", main);
window.addEventListener("turbo:render", main);