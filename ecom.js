console.log("date 08.04.2022")














 function openSearch() {
    // document.getElementById("a").style.visibility = "visible";
    // console.log("ok")
  }
  openSearch();

  function closeSearch() {
    //     document.getElementById("a").style.visibility = "hidden";
    // console.log("ik")
    
  }



  var  find =() =>{
    var   out = document.getElementById("a");
    var fill = out.value.toUpperCase();
    var  uul = document.getElementById("latest");
    var lii = uul.getElementsByTagName("li");
   
    for(var k =0; k<lii.length; k++){
        var jo = lii[k].getElementsByTagName("h1")[0];
        var joo =  jo.textContent || jo.innerHTML;
        if(joo.toUpperCase().indexOf(fill)>-1){
            lii[k].style.display = "";
        }
       else{
        lii[k].style.display ="none";
       }
    }
}



// add to acrt page Break After: 
function clicki(war){
  var filll= document.getElementById("img-box");
  filll.src = war.src
  console.log("jijaahhah",war.src)
  console.log("liooaka", filll.src)
}
clicki()


var kiya  = document.querySelector(".kiya");
console.log(kiya)
var tumtu = document.querySelector(".titu")
console.log(tumtu)
var  bag = 0;
tumtu.addEventListener("click", ()=>{
    if(kiya>=1){

    kiya.textContent  = ""; 
}
else{
    kiya.textContent = bag = bag+1  ;
}
})










//Cart 
// PROject Clock================date 21.05.2022===
   




// =======================23.05.2022
