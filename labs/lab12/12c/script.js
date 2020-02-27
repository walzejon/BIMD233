var el = document.getElementById("box");
var count = 0;
function counter() {
  count = count + 1;
  el.textContent = "My Counter Value: " + count;
}
setInterval(counter, 1000);