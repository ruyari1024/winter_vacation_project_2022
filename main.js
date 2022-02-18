
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
    
    screenLog.addEventListener('mousedown', ()=>(pen = true));
    screenLog.addEventListener('mouseup', () => (pen = false));
    screenLog.addEventListener('mousemove', draw)
    let x1;
    let y1;
    let Color = 'rgba(0,0,0,1)'
    function color(color){
        Color = color
    }
    function draw(e) {
        
        if(pen == false){
            x1 = e.offsetX;
            y1 = e.offsetY;
            return 0;
        }else if(pen == true){
        const canvas = document.getElementById('canvas');
        if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        let x = e.offsetX
        let y = e.offsetY
        
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = 5;
        ctx.lineCap = "round"
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1)
        ctx.lineTo(x, y);
        x1 = x;
        y1 = y;
        
        
        
        ctx.stroke();
        }
    }
    }
    
    function color_want() {
        Color = null
        let color = prompt('원하는 색상의 코드를 입력해 주세요(ex: #ffffff) \n추천 링크 : https://www.toolo.kr/color-convert/')
        Color = color
    }