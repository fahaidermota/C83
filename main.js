canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");
mouse_event="";
previous_mx="";
previous_my="";


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="md";
    console.log(mouse_event);
}
canvas.addEventListener("mouseleave",myml);
function myml(e){
    mouse_event="ml";
    console.log(mouse_event);
}
canvas.addEventListener("mouseup",mymp);
function mymp(e){
    mouse_event="mu";
    console.log(mouse_event);
}
canvas.addEventListener("mousemove",mymm);
function mymm(e){
    current_mousex=e.clientX-canvas.offsetLeft;
    current_mousey=e.clientY-canvas.offsetTop;
    if (mouse_event=="md") {
        pen.beginPath();
        pen.strokeStyle="green";
        pen.lineWidth=2;
        pen.moveTo(previous_mx,previous_my);
        pen.lineTo(current_mousex,current_mousey)
        pen.stroke();
    }
    previous_mx=current_mousex;
    previous_my=current_mousey;
}
previous_tx="";
previous_ty="";
if(screen.width<992){
    canvas.width=screen.width-70;
    canvas.height=screen.height-300;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_ts);
function my_ts(e){
    previous_tx=e.touches[0].clientX-canvas.offsetLeft;
    previous_ty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytm);
function mytm(e){
    current_tx=e.touches[0].clientX-canvas.offsetLeft;
    current_ty=e.touches[0].clientY-canvas.offsetTop;
   
        pen.beginPath();
        pen.strokeStyle="green";
        pen.lineWidth=2;
        pen.moveTo(previous_tx,previous_ty);
        pen.lineTo(current_tx,current_ty)
        pen.stroke();
  
    previous_tx=current_tx;
    previous_ty=current_ty;
}
