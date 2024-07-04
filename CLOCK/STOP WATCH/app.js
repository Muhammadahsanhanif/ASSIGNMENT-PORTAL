var min_html = document.getElementById("min")
var second_html = document.getElementById("second")
var milisecond_html = document.getElementById("ms")
var  start_btn = document.getElementById("start_btn")


var second = 0;

var millisecond = 0;

var minutes = 0;


var watchinterval 





function start(){
    watchinterval = setInterval(function(){
        millisecond++
       
    if(millisecond>=99){
        second++
       millisecond = 0
    }
    if(second>=59){
        minutes++
  second = 0
    }



         milisecond_html .innerText = millisecond
        second_html .innerText = second < 10 ? '0'+ second : second
        min_html .innerText = minutes  < 10 ? '0'+ minutes : minutes
        start_btn.disabled = true;
      


    },10)
}

    

function stop(){

    clearInterval(watchinterval)
    start_btn.disabled = false ;

}


function reset(){
    clearInterval(watchinterval)
    
 second = 0;

 millisecond = 0;

 minutes = 0;

 milisecond_html.innerText = 0

  second_html .innerText = 0

  min_html .innerText = 0

  start_btn.disabled= false ;

}

