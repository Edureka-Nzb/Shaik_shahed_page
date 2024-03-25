// let btn = document.querySelectorAll(".myproducts");
// console.log(btn[0]);
// // btn[0].addEventListener("click",function() { console.log("hi")});
// let i = 0;
// for (let b of btn) {
//   btn[i].addEventListener("click", function () {
//     console.log("hi");
//   });
//   i++;
// }

let btn = document.querySelectorAll(".myproducts");
let flag = 0;
// Add a click event listener to each button
btn.forEach((button, index) => {
  button.addEventListener("click", function() {
    // Change the inner text of the clicked button
    if (flag ==0) {

        button.innerText = `Added To Cart`;
        alert("Added to cart");
        flag =1;
    }
    else {
        alert("Removed from cart")
        button.innerText = `Add To Cart`;
        flag = 0;
    }
  });
});

