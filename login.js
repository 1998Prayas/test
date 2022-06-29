console.log("log in")

var input = document.getElementById("login");
console.log(input)
var frmin = document.querySelector(".frm input[type='text']")
var frmin2 = document.querySelector(".frm input[type='Password']")
console.log(frmin)

input.addEventListener("submit",(e)=>{
    var in2 = frmin.value;
    console.log(in2)
    var in3 = frmin2.value

if((in2 =="prayas") && (in3 ==123456 )){
    alert("loged-in ")
    console.log("yes")
    return true;
}
else if(in2 == ""){
 alert("Type user name")
} 
else if(in2 ==""){
    alert("user name is : prayas")
} 
else if(in2 !="prayas"){
    alert("type valid  user name")
} 
else if((in3 != 123456)&&(in2 !="prayas")){
    alert("invalid user name &password")
}
else if(in3 == ""){
    alert("Type  password")
   } 
   else if(in3 ==""){
       alert("password name is : 123456")
   } 
   else if(in3 != 123456){
       alert("type valid  user password")
   }  
   else{
       console.log("no")
       alert("Tryagian")
   }



e.preventDefault();
in2 ="";
in3 ="";

})

