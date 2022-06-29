console.log("dont touch this mail porject");

//this for ADD smthing iN the list
var frm = document.querySelector(".frm");
var input = document.querySelector(".frm input[type='text']");
var todo = document.querySelector(".todolist");
// console.log(todo)

frm.addEventListener("submit", (e) => {
  var in2 = input.value;

  var cr = document.createElement("li");
  var cr2 = `
<a> ${in2}</a>
<div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
</div>
`;

  cr.innerHTML = cr2;
  todo.append(cr);
  e.preventDefault();
  input.value = "";
});

function selectdata() {
  var arr = JSON.parse(localStorage.getItem("crud"));
  if (arr != null) {
    let html = "";
    let sno = 1;
    for (var i in arr) {
      html =
        html +
        ` <tr>
            <td>${sno}</td>
            <td>${arr[i]}</td>
        </tr>`;
      sno++;
    }
  }
  document.getElementById("msg").innerHTML = "data adaead";
}

selectdata();

//this REMOVE LISt
todo.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    var a = e.target.parentNode.parentNode;
    a.remove();
    console.log(a + "55");
  }

  //Chnage COLOR ON click done
  if (e.target.classList.contains("done")) {
    var b = e.target.parentNode.parentNode;
    //  var c = myclr();
    b.style.background = myclr();
  }
});

//fuction random clr
function myclr() {
  const red = Math.floor(Math.random() * 155);
  const r = Math.floor(Math.random() * 155);
  const re = Math.floor(Math.random() * 155);
  const all = `rgb(${red},${r},${re})`;
  return all;
}
myclr();

console.log("search filter");
//this is For filter
// ye fillter Search karega  ADD HUE etoms ko
// but ho nhi raa

//sreach bar
var myFunction = () => {
  var out = document.getElementById("myInput");
  console.log(out, "lil");
  var fill = out.value.toUpperCase();
  console.log(fill, "lo");
  var uul = document.getElementById("todolist");
  console.log(uul,"lolu ");
  var lii = uul.getElementsByTagName("li");

  console.log(lii, "pi");
  for (var k = 0; k < lii.length; k++) {
    var jo = lii[k].getElementsByTagName("a")[0];
    console.log(jo,"jo kya ")
    var joo = jo.textContent || jo.innerHTML;
    console.log(joo,"joo hia ye")
    if (joo.toUpperCase().indexOf(fill) > -1) {
      lii[k].style.display = "";
    } else {
      lii[k].style.display = "none";
    }
  }
};

// local stoage 02.06.2022

// const John = {
//   name: "John Doe",
//   age: 23,
// };
// const jsonObj = JSON.stringify(John);
// localStorage.setItem("John", jsonObj);

// const str = localStorage.getItem("John");
// const parsedObj = JSON.parse(str);
// console.log(parsedObj);

// var a = {
//     key1: "lol",
//     key2: 12,
// }
// const b = JSON.stringify(a);
// localStorage.setItem("a", b);

// const c = localStorage.getItem("a")

// const d = JSON.parse(c);
// console.log(d)
