let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Policy modal functionality
function showPolicy(type) {
    const modal = document.getElementById('policyModal');
    const bookingPolicy = document.getElementById('bookingPolicy');
    const termsConditions = document.getElementById('termsConditions');
    
    modal.style.display = 'block';
    
    if (type === 'booking') {
        bookingPolicy.style.display = 'block';
        termsConditions.style.display = 'none';
    } else {
        bookingPolicy.style.display = 'none';
        termsConditions.style.display = 'block';
    }
}

// Close modal functionality
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('policyModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('policyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
