let krug = document.querySelector(".krug");
let body = document.querySelector("body");

const move = function(e) {
    krug.style.left = e.pageX - e.layerX + (e.layerX - krug.clientWidth / 2) + 'px';
    krug.style.top = e.pageY - e.layerY + (e.layerY - krug.clientHeight / 2) + 'px';
    console.log(e.pageX);
    console.log(e.layerX);
}

krug.addEventListener('mousedown', function() {
    krug.addEventListener('mousemove', move)
});

krug.addEventListener('mouseup', function() {
    krug.removeEventListener('mousemove', move)
});