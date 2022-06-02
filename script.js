const ulEl = document.querySelector("ul");
/* for (let i = 0; i < ulEl.children.length; i++){
    console.log(ulEl.children[i].innerHTML);
} */

ulEl.prepend(ulEl.children[5], ulEl.children[0]);
console.log(ulEl.children.innerText);

ulEl.children[0].className = "important";