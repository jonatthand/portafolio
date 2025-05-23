window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY > 0);
})

let nextBtn = document.querySelector('.next')
console.log(nextBtn);
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    console.log("Botón siguiente clickeado");
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    console.log("Botón anterior clickeado");
    moveSlider('prev')
}


function moveSlider(direction) {
    console.log("Dirección: ", direction);
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
        console.log("Añadida clase next");
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
        console.log("Añadida clase prev");
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
            console.log("Removida clase next");
        } else {
            slider.classList.remove('prev')
            console.log("Removida clase prev");
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}