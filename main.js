
    const screenLog = document.getElementById('canvas')
    document.addEventListener('mousemove', logKey);

    

    function logKey(e) {
        let canvas = document.querySelector('#canvas')
        let Text = document.querySelector('#location')
        Text.innerHTML = `
    마우스 좌표 X/Y: ${e.offsetX}, ${e.offsetY}<br>
    마우스 좌표2 X/Y: ${e.clientX}, ${e.clientY}
        `;
    }
    
    let pen = false;//자기 영역 기준.
    let macapen = false
    screenLog.addEventListener('mousedown', ()=>(pen = true));
    screenLog.addEventListener('mouseup', () => (pen = false));
    
    screenLog.addEventListener('mousemove', draw)
    let x1;
    let y1;
    let Color = 'rgba(0,0,0,1)'
    let xa
    let ya
    let xb
    let yb
    function color(color){
        Color = color
    }
    function draw(e) {
        
        if(pen == false){
            x1 = e.offsetX;
            y1 = e.offsetY;

            xa = e.offsetX+5
            ya = e.offsetY+5
            xb = e.offsetX-5
            yb = e.offsetY-5
            return 0;
        }else if(pen == true){
        const canvas = document.getElementById('canvas');
        if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        let x = e.offsetX
        let y = e.offsetY
            xa = e.offsetX+5
            ya = e.offsetY+5
            xb = e.offsetX-5
            yb = e.offsetY-5

        if(macapen == true){
            ctx.beginPath();
            ctx.strokeStyle = Color;
            ctx.lineWidth = 6;
            ctx.lineCap = "pixel"
            ctx.moveTo(xb, yb);
            ctx.lineTo(x-5, y-5);
            ctx.lineTo(x+5, y+5);
            ctx.lineTo(xa, ya)
            
            
            
            
            
            x1 = x;
            y1 = y;
            xa = x+5;
            ya = y+5
            xb = x-5
            yb = x-5
            
            
            ctx.fill()
            ctx.stroke();
            
        }else if(eraserpen == true){
            ctx.beginPath();
            ctx.strokeStyle = Color;
            ctx.lineWidth = 5;
            ctx.lineCap = "round"
            ctx.moveTo(x1, y1);
            // ctx.lineTo(x1, y1)
            ctx.lineTo(x, y);
            x1 = x;
            y1 = y;
            
            
            
            ctx.stroke();
        }else{
            ctx.beginPath();
            ctx.strokeStyle = Color;
            ctx.lineWidth = 5;
            ctx.lineCap = "round"
            ctx.moveTo(x1, y1);
            // ctx.lineTo(x1, y1)
            ctx.lineTo(x, y);
            x1 = x;
            y1 = y;
            
            
            
            ctx.stroke();
        }
        
        }
    }
    }
    let eraserpen = false
    function color_want() {
        Color = null
        let color = prompt("원하는 색상을 입력해 주세요.r,g,b,a(투명도)")
        Color = `rgba(${color})`
    }
    function tools(a){
        if(a == 'maca'){if(macapen ==true){macapen = false}else if(macapen == false){macapen = true}}
        if(a == 'eraser'){ macapen = false; if(eraserpen == true){eraserpen = false}else if (eraserpen == false){eraserpen = true}}
    }