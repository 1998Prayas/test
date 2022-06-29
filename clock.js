console.log("porject Clock");

var u = new Date()

var day = +u.getUTCDay()

var p = document.querySelector(".p")
var sp = document.querySelector(".days")
console.log(sp)


  function time(){

    var today = new Date() //Give us All day date time
    var hr = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    var day = today.getUTCDay()

    if(1 ==day){
        var d = "Monday"
    }
    else if(2 ==day){
        var d = "Tuesday"
    }
    else if(3 ==day){
        var d = "Wednesday"
    }
    else if(4 ==day){
        var d = "Thursday"
    }
    else if(5 ==day){
        var d = "Friday"
    }
    else if(6==day){
        var d = "Saturday"
    }
    else if(7 ==day){
        var d = "Saturday"
    }
    
 setTimeout(time,1000)  
p.textContent =   hr+":"+ min+":"+sec 
sp.textContent =  d
}
time()



 var bod = document.querySelector(".body")
 var id = setInterval(clr,10000); 
   function clr(){
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
     var all = `rgb(${r},${g},${b})`
  
    // console.log(all) 
    bod.style.background = all
    
   }

      
