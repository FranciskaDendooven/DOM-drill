const ulEl = document.querySelector("ul");
const items = document.querySelectorAll("li");
for (let i = 0; i < ulEl.children.length; i++){
    console.log(ulEl.children[i].innerHTML);
}
ulEl.addEventListener ("click", event => {
    if (ulEl.children[0]==ulEl.children[0])
    alert(ulEl.children[0].innerText);

    else (ulEl.children[1]==ulEl.children[1])
    alert(ulEl.children[1].innerText);
});

ulEl.prepend(ulEl.children[5], ulEl.children[0]);
console.log(ulEl.children.innerText);

ulEl.children[0].className = "important";

