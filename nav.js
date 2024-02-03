let mnueBtn = document.getElementById("menuIcon");
let tabs = document.getElementById("tabs");
let isOpen = false;

function toggleMenu(){
    if (!isOpen) {
        tabs.classList.add('active');
        isOpen = true;
    } else {
        tabs.classList.remove('active');
        isOpen = false;
    }
    
    // Check if the slideshow and dots should be hidden when the menu is active
    let slideshowContainer = document.querySelector('.slideshow-container');
    let dotsContainer = document.querySelector('.dots');
    if (tabs.classList.contains('active')) {
        slideshowContainer.style.display = 'none';
        dotsContainer.style.display = 'none';
    } else {
        slideshowContainer.style.display = 'block';
        dotsContainer.style.display = 'block';
    }
}

