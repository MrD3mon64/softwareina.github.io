var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="/indexen.html";
    }else{
        location.href="/index.html"
    }
}




let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

