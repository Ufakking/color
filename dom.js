let button = document.querySelector('.button');
let body = document.querySelector('body');
// let inputValue = document.querySelector('.input').value
let input = document.querySelector('.input')
let p = document.querySelector('.p')
let toggle = document.querySelector('.toggle')
let box = document.querySelector('.box')
let prevBtn = document.querySelector('.previous')
let nextBtn = document.querySelector('.next');
let images = document.querySelectorAll('.gallery-img')
let currentlySelected = 0;

console.log(prevBtn);

button.addEventListener('click', function(){
    body.style.backgroundColor = "rgb("+ randomRgb() + "," + randomRgb() + ","+ randomRgb() + ")"
})

function randomRgb(){
    return Math.floor(Math.random() * 256) + 1;
}

input.addEventListener('change', function(){
    body.style.backgroundColor = input.value
})

input.addEventListener('keydown', function(){
    p.style.color = 'red'
    p.innerHTML = input.value
})


toggle.addEventListener('click', function(){
    if(box.style.display == 'block'){
        box.style.display = 'none'
    }else{
        box.style.display = 'block';
    }
  
})


 prevBtn.addEventListener('click', function(){

    // for(var )

    nextBtn.disabled = false
     if(currentlySelected == 0){
      prevBtn.disabled = true;
     }else{
        images[currentlySelected].classList.remove('active');
        currentlySelected--;
        images[currentlySelected].classList.add('active');
    
     }



   

    // if(currentlySelected == 0){
    //     console.log('hi')
    //     prevBtn.classList.add('disabled')
    // }
})

nextBtn.addEventListener('click', function(){

    prevBtn.disabled = false
    images[currentlySelected].classList.remove('active');
    currentlySelected++;
    images[currentlySelected].classList.add('active')
    console.log(images.length)
    console.log(currentlySelected + 1)

    if(currentlySelected + 1 == images.length){
        nextBtn.disabled = true;
       }
})


