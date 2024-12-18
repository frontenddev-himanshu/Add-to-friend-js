// define
let head = document.getElementById("heading");
let btn = document.getElementById("btn");

let back = 0;


// event
btn.addEventListener("click", function () {

    if (back == 0) {
        head.innerText = "Added To Friend"
        btn.innerText = "Added"
        back = 1;
    }

    else {
        head.innerText = "Add To Friend";
        btn.innerText = "Add"
        back = 0;
    }

})