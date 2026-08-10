let container = document.querySelector('.container');


function draw(size){
    for(let i = 1; i <= size * size; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
}
draw(16);