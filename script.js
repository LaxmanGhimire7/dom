

let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let h3 = document.querySelector("h3")

let a = 0;

inc.addEventListener("click", function(){
    a++;
    h3.innerHTML = a;
});

dec.addEventListener("click", function(){
    a--;
    h3.innerHTML = a;
});

