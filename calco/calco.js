let state = -1;

function one() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=1;
        document.getElementById("ecran1").innerHTML+=1;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
    
}
function two() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=2;
        document.getElementById("ecran1").innerHTML+=2;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function three() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=3;
        document.getElementById("ecran1").innerHTML+=3;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function four() {  
    if (state==1) {
        document.getElementById("ecran").innerHTML+=4;
        document.getElementById("ecran1").innerHTML+=4;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function five() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=5;
        document.getElementById("ecran1").innerHTML+=5;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function six() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=6;
        document.getElementById("ecran1").innerHTML+=6;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function seven() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=7;
        document.getElementById("ecran1").innerHTML+=7;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function eight() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=8;
        document.getElementById("ecran1").innerHTML+=8;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function nine() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=9;
        document.getElementById("ecran1").innerHTML+=9;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function zero() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+=0;
        document.getElementById("ecran1").innerHTML+=0;    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function dot() {
    if (state==1) {
        document.getElementById("ecran").innerHTML+='.';
        document.getElementById("ecran1").innerHTML+='.';    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function reset() {
    document.getElementById("ecran").innerHTML=""
    document.getElementById("ecran1").innerHTML="";
}
function del() {
    document.getElementById("ecran").innerHTML=""
    document.getElementById("ecran1").innerHTML="";
}
function on() {
    state = 1;
    var on=document.getElementById("ecran1");
    on.setAttribute("style","background: aquamarine;");
}
function off() {
    state = 0;
    var off=document.getElementById("ecran1");
    off.setAttribute("style","background: white;");
    if (off.style.background=="white") {
        document.getElementById("ecran1").innerHTML=""     
    }
}
function plus(){
    if (state==1) {
        document.getElementById("ecran").innerHTML+='+';
        document.getElementById("ecran1").innerHTML+='+';    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function moins(){
    if (state==1) {
        document.getElementById("ecran").innerHTML+='-';
        document.getElementById("ecran1").innerHTML+='-';    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    }
}
function fois(){
    if (state==1) {
        document.getElementById("ecran").innerHTML+='*';
        document.getElementById("ecran1").innerHTML+='*';    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    } 
}
function div(){
    if (state==1) {
        document.getElementById("ecran").innerHTML+='/';
        document.getElementById("ecran1").innerHTML+='/';    
    }
    else if(state==0)
    {
        document.getElementById("ecran").innerHTML+="";
        document.getElementById("ecran1").innerHTML+="";
    } 
}
function cos(){
    document.getElementById("ecran1").innerHTML="cos ";

}
function sin()
{
    document.getElementById("ecran1").innerHTML="sin ";
} 
function egal() {

    let screen = document.getElementById("ecran");
    let screen1 = document.getElementById("ecran1"); 

    screen1.textContent=eval(screen.textContent);
    console.log(eval(screen.textContent));

    document.getElementById("ecran1").innerHTML=screen1.textContent;
    
    if(document.getElementById("ecran1").innerHTML=="cos"){
        var nb1=+document.getElementById("ecran").innerHTML;
        var cos=Math.cos(nb1);
        console.log(cos);
    
    }
    else if(document.getElementById("ecran1").innerHTML == "sin")
    {
        var nb1=+document.getElementById("ecran").innerHTML;
        var sin=Math.sin(nb1);
        console.log(sin); 
    }

}
function ans(){
    document.getElementById("ecran").innerHTML+=test;
    document.getElementById("ecran1").innerHTML=test;

}