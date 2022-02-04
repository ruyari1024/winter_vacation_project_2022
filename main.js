
let screenLog = document.querySelector('#canvas');
    document.addEventListener('mousemove, mouse', logKey);

    

    function logKey(e) {

        let Text = document.querySelector('#location')
        Text.innerText = `
        Screen X/Y: ${e.screenX}, ${e.screenY}
        Client X/Y: ${e.offsetX}, ${e.offsetY}`;
        if(){

        }
    }//자기 영역 기준.

    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
        
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(148, 148);
        ctx.lineTo(148, 1);
        // ctx.fill();
        ctx.closePath()
        ctx.stroke()
        }
    }