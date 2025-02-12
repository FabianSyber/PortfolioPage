window.initializeCarousel = function() {
    window.slideIndex = 1;
    showDivs(slideIndex);   
};

window.plusDivs = function(n) {
    showDivs(slideIndex += n);
};

function showDivs(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (!slides.length) return;
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Pause video when switching slides
    const currentVideo = document.querySelector('.video-slide iframe');
    if (currentVideo) {
        const videoSrc = currentVideo.src;
        currentVideo.src = videoSrc;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    
    const currentSlide = slides[slideIndex - 1];
    if (!currentSlide.classList.contains('video-slide')) {
        updateTextColorForBackgroundImage('.mySlides[style*="display: block"]', '.typing-carousel');
        updateTextColorForBackgroundImage('.mySlides[style*="display: block"]', '.greeting');
    }
}
// Initialize typing carousel
window.initializeTyping = function() {
    const typingData = document.getElementById('typing-carousel-data');
    if (typingData && typeof ityped !== 'undefined') {
        const data = Array.from(typingData.children).map(el => el.textContent);
        ityped.init('#ityped', {
            strings: data,
            startDelay: 200,
            loop: true
        });
    }
};

function updateTextColorForBackgroundImage(bgSelector, textSelector) {
    const bgElement = document.querySelector(bgSelector);
    const textElement = document.querySelector(textSelector);
    
    if (!bgElement || !textElement) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.crossOrigin = "Anonymous";
    img.src = getComputedStyle(bgElement).backgroundImage.slice(4, -1).replace(/['"]/g, '');
    
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const centerX = Math.floor(canvas.width / 2);
        const centerY = Math.floor(canvas.height / 2);
        const sampleSize = 100; 
        const imageData = ctx.getImageData(
            centerX - sampleSize/2,
            centerY - sampleSize/2,
            sampleSize,
            sampleSize
        );
        
        let brightness = 0;
        let totalPixels = 0;
       
        for (let i = 0; i < imageData.data.length; i += 4) {
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            const a = imageData.data[i + 3];
            
            // treat transparent pixels as white
            if (a < 128) {
                brightness += 255;
            } else {

                brightness += (0.299 * r + 0.587 * g + 0.114 * b) * (a / 255);
            }
            totalPixels++;
        }
      
        const averageBrightness = brightness / totalPixels;
        
        textElement.style.color = averageBrightness < 128 ? '#c0ccda' : '#1c2d41';
    };
}
