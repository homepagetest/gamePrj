(function () {
    'use strict';
    let ctx, posX = 0, velocityX = 25;
    window.onload = init;
    function init() {
        ctx = document.getElementById("viewer").getContext("2d");
        setInterval(tick, 100);
    }

    function tick() {
        var img = new Image();
        img.src = "tukinomito.png";
        ctx.fillStyle = "aqua";
        ctx.fillRect(0,0,1000,800);
        /* 画像を描画 */
        ctx.drawImage(img, posX, 50);
        posX += velocityX;
        if (posX === 1000) {
            posX = 0;
        }

    }
})();