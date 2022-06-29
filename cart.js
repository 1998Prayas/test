console.log('date 23.05.2022 cart')


let carts = document.querySelectorAll(".titu")


let pd = [
    {
    name: 'prayas',
    tag: (16),
    price: 100,
    incart: 0

},
{
    name: 'car',
    tag: (11),
    price: 200,
    incart: 0

},

{
    name: 'boy',
    tag: (12),
    price: 300,
    incart: 0

},
{
    name: "nareded toys",
    tag: (13),
    price: 400,
    incart: 0


},
{
    name: 'braneded toys',
    tag: (14),
    price: 400,
    incart: 0


},

{
    name: 'braneded toy',
    tag: (16),
    price: 500,
    incart: 0


},
{
    name: 'anede toys',
    tag: (14),
    price: 600,
    incart: 0


},
{
    name: 'neded toys',
    tag: (12),
    price: 700,
    incart: 0
},
{
    name: 'eded toys',
    tag: (13),
    price: 800,
    incart: 0
},
{
    name: 'Mymood toys',
    tag: (17),
    price: 900,
    incart: 0
},
{
    name: 'braneded toys',
    tag: (19),
    price: 1000,
    incart: 0
},
{
    name: ' toys',
    tag: 15,
    price: 1100,
    incart: 0
},
{
    name: 'satyam toys',
    tag: 16,
    price: 1200,
    incart: 0
}

]



for(let i =0; i<carts.length; i++){
    carts[i].addEventListener('click',(e)=>{

        cartnums(pd[i]);
       
        totalcost(pd[i])
         e.preventDefault()
    })                  
}


function onloadcartnums(){
   
    let pronum = localStorage.getItem('cartnums');
if(pronum){
    document.querySelector(".main_cart span").textContent =pronum;
  
}

}

function cartnums(p){
    let pronum = localStorage.getItem('cartnums')
    pronum = parseInt(pronum)
    if(pronum){
        localStorage.setItem('cartnums',pronum + 1)
        document.querySelector(".main_cart span").textContent =pronum +1;

    }
    else{
        localStorage.setItem('cartnums',1)
 document.querySelector(".main_cart span").textContent = 1;
    }
    setItem(p)
    
}


function  setItem(p){
  let  cartItems = localStorage.getItem("produtsInCart")
  cartItems = JSON.parse(cartItems);


  if( cartItems !=null){
        
// console.log(cartItems[p.tag])

    if(cartItems[p.tag] ==  undefined){
        cartItems= {
            ...cartItems,
            [p.tag]: p
        }
    }
      cartItems[p.tag].incart +=1;
  }
  else{
    p.incart = 1;

    cartItems = {
       [p.tag]:p
  }
   

    }
   
    localStorage.setItem("produtsInCart",JSON.stringify(cartItems))
}

function totalcost(p){
// console.log("time ",p.price)
let cartcost = localStorage.getItem('totalcost');

console.log("const " , cartcost)
console.log(typeof cartcost)



if(cartcost != null){
    cartcost = parseInt(cartcost)
    localStorage.setItem("totalcost",cartcost +p.price)
    console.log(typeof cartcost)
}
else{
    localStorage.setItem("totalcost",p.price)
}

}

function displaycart(){
    let cartItems = localStorage.getItem("produtsInCart");
    cartItems = JSON.parse(cartItems)
    let prodcontaner = document.querySelector(".prods")
    let cartcost = localStorage.getItem('totalcost');
    if(cartItems && prodcontaner ){
prodcontaner.innerHTML = "";

Object.values(cartItems).map(item =>{
    prodcontaner.innerHTML +=`<div class="prods pros1">
    
<button class="todo-btn remove ">Remove</button>
    <img src="./images (${item.tag}).jpeg" alt="">
    <span>${item.name}</span>
   
  
    <div class="pirce1">${item.price}.00</div>
    <div class="quantity">
    <i class="fa fa-plus remo"></i>
    <span> ${item.incart}</span>
    <i class="fa fa-minus"></i> </div>
    <div class="total">
    ${item.incart * item.price}.00

    </div> 
    </div>
    `
});

prodcontaner.innerHTML +=`
<div class="Basket-container">
<h4 class="basket-title">
Basket-total
</h4>
<h4 class="Basket-total">
${cartcost}.00 </h4>
</div>`
    }
}
onloadcartnums()
displaycart()








var pod = document.querySelector(".pros1")
console.log(pod)
pod.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        var a = e.target.parentNode;
        a.remove()
        console.log(a+"55")
    }


})
var cc = document.querySelector(".clearbtn")
console.log(cc)

cc.addEventListener("click",()=>{
    localStorage.clear()
location.reload()
console.log("ok")
})



// =============================  
// var kiya  = document.querySelector(".kiya");
// console.log(kiya)
// var tumtu = document.querySelector(".titu")
// console.log(tumtu)
// var  bag = 0;
// tumtu.addEventListener("click", ()=>{
//     if(kiya>=1){

//     kiya.textContent  = ""; 
// }
// else{
//     kiya.textContent = bag = bag+1  ;
// }
// })



