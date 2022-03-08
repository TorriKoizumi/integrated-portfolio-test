// THE HERO CANVAS
const heroCanvas = document.querySelector('#hero-canvas')

const ctx = heroCanvas.getContext('2d')

// Setting Canvas Width and Height (normal/retina)
function setCanvasDimensions() {
  const dpr = window.devicePixelRatio || 1

  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr

  canvas.style.height = window.innerHeight + 'px'
  canvas.style.width = window.innerWidth + 'px'

  ctx.scale(dpr, dpr)
}

// Mouse Event Handlers
if(heroCanvas){
  var isDown = false;
  var canvasX, canvasY;
  ctx.lineWidth = 5;
  
  $(heroCanvas)
  .mousedown(function(e){
    isDown = true;
    ctx.beginPath();
    canvasX = e.pageX - heroCanvas.offsetLeft;
    canvasY = e.pageY - heroCanvas.offsetTop;
    ctx.moveTo(canvasX, canvasY);
  })
  .mousemove(function(e){
    if(isDown !== false) {
      canvasX = e.pageX - heroCanvas.offsetLeft;
      canvasY = e.pageY - heroCanvas.offsetTop;
      ctx.lineTo(canvasX, canvasY);
      ctx.strokeStyle = "#000";
      ctx.stroke();
    }
  })
  .mouseup(function(e){
    isDown = false;
    ctx.closePath();
  });
}









// Custom Mouse Cursor by Conor Bailey
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  
  // console.log(x,y);
  
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach(link =>{
  link.addEventListener('mouseover', ()=>{
      innerCursor.classList.add('grow');
  });
  link.addEventListener('mouseleave', ()=>{
      innerCursor.classList.remove('grow');
  });
});


// MEDIUM ZOOM LIBRARY
