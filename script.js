let container = document.querySelector('.container');
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;
let size = 6;
function draw(size){
    for(let i = 1; i <= size * size; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.style.width = containerWidth / size + "px";
        box.style.height = containerHeight / size + "px";
        box.addEventListener('mouseenter', (event)=>{
            box.style.backgroundColor = "black";
        })
        
    }
}
let button = document.getElementById("button");
button.addEventListener('click', (event)=>{
    size = Number(prompt("Choose grid size", "0"));
    container.replaceChildren();
    draw(size);
})
draw(size);
