let string = `
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
*::after *::before{
    box-sizing: border-box;
}
body{
    min-height: 100vh;
    background: #fff400;
}

.nose{
    border: 3px solid black;
    background: #fff400;
    position: relative;
    width: 46px;
    height: 114px;
    left:50%;
    top: 20px;
    margin-left: -23px;
    border-radius:50%/50%;
    border-bottom: transparent;
    z-index: 10;
}
.eye{
    height: 170px;
    width: 340px;
    left:50%;
    top: 150px;
    margin-left: -170px;
    position: relative;
}
 .eye-left {
    position: absolute;
    border: 5px solid black;
    width: 170px;
    height: 170px;
    border-radius:50%;
    background: white;
  }
 .eye-right {
    position: absolute;
    border: 5px solid black;
    width: 170px;
    height: 170px;
    border-radius:50%;
    left:170px;
    background: white;
  }
  .pupil{
      position: absolute;
      border:1px solid black;
      width: 58px;
      height: 58px;
      top: 60px;
      border-radius: 50%;
      background: #0093DC;
  }
  .pupil.left {
    right: 75px;
  }
  .pupil.right {
    right: 75px;
  }
  .iris{
      display: block;
      border: 1px solid black;
      background: black;
      width: 27px;
      height: 27px;
      border-radius: 50%;
      position: absolute;
      left: 15px;
      top: 15px;
  }

.eye-left-1{
    position: absolute;
    width: 8px;
    height: 38px;
    background: black;
    top: -25px;
    left: 45px;
    transform: rotate(-12deg);
}
.eye-left-2{
    position: absolute;
    width: 8px;
    height: 38px;
    background: black;
    top: -35px;
    left: 75px;
}
.eye-left-3{
    position: absolute;
    width: 8px;
    height: 38px;
    background: black;
    top: -35px;
    left: 105px;
    transform: rotate(12deg);
}

.eye-right-1{
    position: absolute;
    width: 8px;
    height: 38px;
    background: black;
    top: -25px;
    right: 45px;
    transform: rotate(12deg);
}
.eye-right-2{
    position: absolute;
    width: 8px;
    height: 38px;
    background: black;
    top: -35px;
    right: 75px;
}
.eye-right-3{
    position: absolute;
    width: 8px;
    height: 38px;
    background: black;
    top: -35px;
    right: 105px;
    transform: rotate(-12deg);
}

.mouth{
    position:relative;
    width: 300px;
    height: 220px;
    left: 50%;
    margin-left: -150px;
    top: -70px;
    border: 2px solid transparent;
    border-bottom: 5px solid black;
    border-radius: 50%;
}

.mouth-crease-left{
    position: absolute;
    width: 90px;
    height: 60px;
    top: 160px;
    border: 2px solid transparent;
    border-left: 5px solid black;
    border-radius: 50%;
    transform: rotate(60deg);
}
.mouth-crease-right{
    position: absolute;
    width: 90px;
    height: 60px;
    right: 0;
    top: 160px;
    border: 2px solid transparent;
    border-right: 5px solid black;
    border-radius: 50%;
    transform: rotate(-60deg);
}

.tooth-1{
    position: absolute;
    background: white;
    width: 30px;
    height: 40px;
    left: 50%;
    margin-left: -40px;
    bottom:-40px;
    border: 5px solid black;
    transform: rotate(5deg);
}

.tooth-2{
    position: absolute;
    background: white;
    width: 30px;
    height: 40px;
    left: 50%;
    margin-left: 10px;
    bottom:-40px;
    border: 5px solid black;
    transform: rotate(-5deg);
}

.cheek{
    position: absolute;
    width: 100px;
    height: 50px;
    border: 2px solid transparent; 
    border-top: 5px solid #D9241C;
    border-left: 4px solid #D9241C;
    border-right: 4px solid #D9241C;
    border-radius: 50%;
}

.cheek.left{
    top: 120px;
    left: -30px;
    transform: rotate(-20deg);
}

.cheek.right{
    top: 120px;
    right: -30px;
    transform: rotate(20deg);
}


.dimples{
    position: absolute;
    width: 10px;
    height: 10px;
    background: #D9241C;
    border-radius: 50%;
}

.dimples.left-1{
    left: 55px;
    top: 5px;
}
.dimples.left-2{
    left: 15px;
    top: 5px;
}
.dimples.left-3{
    left: 35px;
    top: 15px;
}

.dimples.right-1{
    right: 55px;
    top: 5px;
}
.dimples.right-2{
    right: 15px;
    top: 5px;
}
.dimples.right-3{
    right: 35px;
    top: 15px;
}
.chin::before{
    position: absolute;
    top:450px;
    left: 50%;
    margin-left: -80px;
    content: '';
    height: 90px;
    width: 90px;
    border: 2px solid transparent;
    border-bottom: 8px solid #D9241C;
    border-radius: 50%;
    transform: rotate(10deg);
}
.chin::after{
    position: absolute;
    content: '';
    height: 90px;
    width: 90px;
    top: 450px;
    left: 50%;
    margin-left: -10px;
    border: 2px solid transparent;
    border-bottom: 8px solid #D9241C;
    border-radius: 50%;
    transform: rotate(-10deg);
}
`
let n = 1
let time = 100
let run = () => {
    n+=1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    demo.scrollTop = demo.scrollHeight
}

const play = () => {
    return setInterval(run,time)
}
let id = play

const pause = () => {
    window.clearInterval(id)
}

const slow = () => {
    pause()
    time = 300
    id=play()
}
const normal = () => {
    pause()
    time = 100
    id = play()
}
const fast = () => {
    pause()
    time = 0
    id = play()
}

btnPause.onclick = pause()
btnPlay.onclick = ()=> {
    id = play()
}
btnSlow.onclick = slow
btnMiddle.onclick = normal
btnFast.onclick = fast






document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(event) {
    var eyeLeft = document.querySelectorAll('.eye-left');
    let x1 = (eyeLeft[0].getBoundingClientRect().left + (eyeLeft[0].clientLeft / 2));
    let y1 = (eyeLeft[0].getBoundingClientRect().top + (eyeLeft[0].clientTop / 2));
    let radian1 = Math.atan2(event.pageX - x1, event.pageY -y1);
    let rot1 = (radian1 * (180 / Math.PI) * -1) + 270;
    eyeLeft[0].style.transform = 'rotate(' + rot1 + 'deg)';

    var eyeRight = document.querySelectorAll('.eye-right');
    let x2 = (eyeRight[0].getBoundingClientRect().left + (eyeRight[0].clientLeft / 2));
    let y2 = (eyeRight[0].getBoundingClientRect().top + (eyeRight[0].clientTop / 2));
    let radian2 = Math.atan2(event.pageX - x2, event.pageY -y2);
    let rot2 = (radian2 * (180 / Math.PI) * -1) + 270;
    eyeRight[0].style.transform = 'rotate(' + rot2 + 'deg)';

}