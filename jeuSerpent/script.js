window.onload= function()
{    

    /*les variables */
    let canvas;
    let ctx;
    let delay =100;
    let xCoord =0;
    let yCoord =0;
    init();

    /*fonction d'initialisation */
    function init()
    {

        canvas = document.createElement('canvas');
        canvas.width=900;
        canvas.height=600;
        canvas.style.border="2px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
    }
    
    /*fonction de rafraichissement */
    
    function refreshCanvas()
    {
        xCoord += 2;
        yCoord += 2;
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle= 'red';
        ctx.fillRect(xCoord,yCoord ,80, 30)
        setTimeout(refreshCanvas,delay);
    }


}