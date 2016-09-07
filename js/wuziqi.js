var me = true;
var chessBoard = [];//存放棋子
//初始化二维数组
for(var i=0;i<15;i++){
    chessBoard[i] = [];
    for(var j = 0;j<15;j++){
        chessBoard[i][j] = 0;//
    }
}

var chess = document.getElementById('chess');
var context = chess.getContext('2d');

context.strokeStyle = "#bfbfbf";
//背景
var logo = new Image();
logo.src = "image/icon/icon_1.png";
logo.onload = function () {
    //加载成功之后
    context.drawImage(logo, 0, 0, 450, 450);
    //顺序问题
    drawChessBoard();
}

var drawChessBoard = function () {
    for (var i = 0; i < 15; i++) {
        //画方格
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();

        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
    }
}

var oneStep = function(i,j,me){//i j  是索引，me是黑棋白棋的意思
    //画圆  棋子
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);//可以话扇形
    context.closePath();
    var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);//设置渐变
    if(me){
        gradient.addColorStop(0,"#0a0a0a");
        gradient.addColorStop(1,"#636766");
    }else{
        gradient.addColorStop(0,"#d1d1d1");
        gradient.addColorStop(1,"#f9f9f9");
    }
    context.fillStyle = gradient;//设置填充颜色为渐变
    context.fill();//这样可以填充。 context.stroke();是描边
}
chess.onclick = function(e){
    var x = e.offsetX;
    var y = e.offsetY;//相对棋盘的位置
    //计算第几个
    var i = Math.floor(x/30);
    var j = Math.floor(y/30);
    if(chessBoard[i][j] == 0){
        oneStep(i, j,me);
        if(me){
            chessBoard[i][j] = 1;
        }else{
            chessBoard[i][j] = 2;
        }
        me = !me;//切换下棋
    }
}
