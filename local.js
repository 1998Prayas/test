//  console.log("ok")
 

var frm = document.querySelector(".frm")
var inp = document.getElementById("name");
var h2 = document.querySelector(".h2")
loc()
function loc(){
    var in2 = inp.value
var cr = document.createElement("h2")
var  p= `<h2 class="h2"> <a href="#">   ${in2} </a>
</h2>`

h2.appendChild(cr)

// cr.innerHTML = bu;

localStorage.setItem(`${in2}b`,JSON.stringify(`${in2}`));

var bu =JSON.parse(localStorage.getItem(`${in2}b`))
console.log(bu)

// var oo = bu.JSON.stringify()
// cr.innerHTML = bu;

cr.innerHTML = bu;

}
loc()
 

function hoh(){
var one = document.querySelector(".find")
console.log(one)
var two = one.value.toUpperCase()
console.log(two)
var three = document.querySelector(".h2")
console.log(three)

for(var i=0; i<three.length; i++){
    var fr = three[i].getElementsByTagName("a")[0];
    var five= fr.textContent || fr.innerHTML
console.log(five ,"sssk")
    if(five.toUpperCase().indexOf(two)>-1){
        three[k].style.display = "";
        console.log(three)

    }
    else{
        three[k].style.display = none;
    }
}
}
// console.log(localStorage.getItem(`${cr}`))
// var nh = ["arr1", "arr2"]



var uni = document.querySelector(".div1")
var in5 = document.querySelector(".in")
console.log(uni);
// console.log(unii)

function upp(){
    var unii = in5.value;
var huji = document.createElement("li")

var ran = `<li>${unii}</li>`


uni.appendChild(huji)
huji.innerHTML = ran
}
