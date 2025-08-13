    // let x =[[1,2,3],[4,5,6],[7,8,9]];
    // console.log(x);
    // console.error("This is an error message");
    // console.warn("This is a warning message");
    // console.info("This is an info message");
    // console.table(x);

// lay doi tuong html
//id
let logo = document.getElementById("logo");
console.log(logo);
//class
let navs = document.getElementsByClassName("nav");
console.log(navs);
//tag
let divs = document.getElementsByTagName("div");
console.log(divs);

//
addEventListener("click", function() {
    console.log("You clicked the document");
});
removeEventListener("click", function() {
    console.log("You clicked the document");
});
event.preventDefault();