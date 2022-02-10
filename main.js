
let screenLog = document.querySelector('#canvas')
    document.addEventListener('mousemove', logKey);

    

    function logKey(e) {
        let canvas = document.querySelector('#canvas')
        let Text = document.querySelector('#location')
        Text.innerHTML = `
    마우스 좌표 X/Y: ${e.offsetX}, ${e.offsetY}
        `;
    }
    
    let pen = false;//자기 영역 기준.
    document.addEventListener('mousedown', ()=>(pen = true));
    document.addEventListener('mouseup', () => (pen = false));
    document.addEventListener('mousemove', draw)
    
    function draw(e) {
        
        if(pen == false){
            return 0;
        }else if(pen == true){
        const canvas = document.getElementById('canvas');
        if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        let x = e.offsetX
        let y = e.offsetY
        
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineCap = "round"
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        
        ctx.stroke();
        }
    }
    }