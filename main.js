var mouse_e="";
var last_pos_x,last_pos_y;
canvas=document.getElementById("loop");
ctx=canvas.getContext("2d");
var color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
//ctx.arc(200,200, 50,0 ,2*Math.PI);
//ctx.stroke();

var width=screen.width;

var new_width=screen.width - 70;
var new_height=screen.height - 300;

if(width < 992){
    document.getElementById("loop").width=new_width;
    document.getElementById("loop").height=new_height;
    document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",my_mouse_dowwn);
function my_mouse_dowwn(e){
    mouse_e="my_mouse_clicked";

    mouse_x=e.touches[0].clientX - canvas.offsetLeft;
    mouse_y=e.touches[0].clientY - canvas.offsetTop;

    //circle(mouse_x,mouse_y);
    color=document.getElementById("gd").value;
console.log(color);
}
canvas.addEventListener("touchmove",my_mousemoove);
function my_mousemoove(e){
   // mouse_e="my_mouse_movlicked";
    mouse_x=e.touches[0].clientX - canvas.offsetLeft;
    mouse_y=e.touches[0].clientY - canvas.offsetTop;
    if(mouse_e=="my_mouse_clicked"){
        ctx.beginPath();
        ctx.lineWidth=10;
        ctx.strokeStyle=color;
        ctx.moveTo(last_pos_x,last_pos_y);
        ctx.lineTo(mouse_x,mouse_y);
        ctx.stroke();
    }

    last_pos_x=mouse_x;
    last_pos_y=mouse_y;
}
function circle(){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.arc(mouse_x,mouse_y, 200,0 ,2*Math.PI);
    ctx.lineWidth=300;
    ctx.stroke();

}
