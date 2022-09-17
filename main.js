var Canvas= new fabric.Canvas('MyCanvas');
player_x=10;
player_y=10;

block_w=30;
block_h=30;

var player_object="";
var block_object="";

function Player_Update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, left:player_x
        });
        Canvas.add(player_object);
    });
}
function Block_Update(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        block_object=Img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top:player_y, left:player_x
        });
        Canvas.add(block_object);
    });
}

window.addEventListener ("keydown", myKeydown);

function myKeydown(e){
    var keypress=e.keyCode;
console.log(keypress);
if (e.shiftKey==true && keypress=="80"){
    console.log("shiftKey + p");
    block_w= block_w + 10;
    block_h = block_h + 10;
    document.getElementById("width").innerHTML=block_w;
    document.getElementById("height").innerHTML=block_h;
}

if (e.shiftKey==true && keypress=="77"){
    console.log("shiftKey + m");
    block_w= block_w - 10;
    block_h = block_h - 10;
    document.getElementById("width").innerHTML=block_w;
    document.getElementById("height").innerHTML=block_h;
}

if (keypress=="38"){
    up();
    console.log("up");
}


if (keypress=="37"){
    left();
    console.log("left");
}

if (keypress=="40"){
    down();
    console.log("down");
}

if (keypress=="39"){
    right();
    console.log("right");
}

if (keypress=="68"){
    Block_Update("dark_green.png");
    console.log("d");
}

if (keypress=="67"){
    Block_Update("cloud.jpg");
    console.log("c");
}

if (keypress=="76"){
    Block_Update("light_green.png");
    console.log("l");
}

if (keypress=="71"){
    Block_Update("ground.png");
    console.log("g");
}   

if (keypress=="89"){
    Block_Update("yellow_wall.png");
    console.log("y");
}

if (keypress=="87"){
    Block_Update("wall.jpg");
    console.log("w");
}

if (keypress=="85"){
    Block_Update("unique.png");
    console.log("u");
}

if (keypress=="84"){
    Block_Update("trunk.jpg");
    console.log("t");
}


if (keypress=="82"){
    Block_Update("roof.jpg");
    console.log("r");
}
}

function up(){
  if (player_y>=0){
      player_y= player_y - block_h ;
      console.log(block_h);
      console.log("player x= " + player_x + ",player y= " + player_y);
      Canvas.remove(player_object);
      Player_Update();
      
  }

}


function down(){
    if (player_y<=650){
        player_y= player_y + block_h ;
        console.log(block_h);
        console.log("player x= " + player_x + ",player y= " + player_y);
        Canvas.remove(player_object);
        Player_Update();
    }
    }

    
function left(){
    if (player_x>=0){
        player_x= player_x - block_w ;
        console.log(block_w);
        console.log("player x= " + player_x + ",player y= " + player_y);
        Canvas.remove(player_object);
        Player_Update();
    }
    }

    
function right(){
    if (player_x<=850){
        player_x= player_x + block_w ;
        console.log(block_w);
        console.log("player x= " + player_x + ",player y= " + player_y);
        Canvas.remove(player_object);
        Player_Update();
    }
    }