window.initializePost = async function() {
    const postPath = window.location.pathname.split('/')[2];
    
    try {
        // Show loading states
        document.getElementById('title').innerHTML = '<div class="loading-spinner"></div>';
        document.getElementById('markdown-content').innerHTML = '<div class="loading-spinner"></div>';
        
        // Load navbar first
        await window.loadComponent('navbar', '/components/navbar.html');
        
        const results = await Promise.allSettled([
            loadPostData(postPath),
            loadPostContent(postPath),
            loadImages(postPath)
        ]);

        // Optionally, inspect results to see if images failed.
        const imageResult = results[2];
        if (imageResult.status === 'rejected') {
            console.warn('Images failed to load, but post content is shown.', imageResult.reason);
        }
        
        if (typeof initializeCarousel === 'function') {
            initializeCarousel();
          }
    } catch (error) {
        console.error('Error initializing post:', error);
        showError();
    }
};

async function loadPostData(postPath) {
    try {
        const response = await fetch(`/posts/${postPath}/post.json`);
        if (!response.ok) throw new Error('Post data not found');
        
        const data = await response.json();
        
        document.title = data.title;
        document.getElementById('post-title').textContent = data.title;
        document.getElementById('title').textContent = data.title;
        document.getElementById('year').innerHTML = `<span>Year</span> <span>${data.year}</span>`;
        document.getElementById('location').innerHTML = `<span>Location</span> <span>${data.location}</span>`;
        document.getElementById('status').innerHTML = `<span>Status</span> <span>${data.status}</span>`;
        document.getElementById('client').innerHTML = `<span>Client</span> <span>${data.client}</span>`;
        document.getElementById('categories').innerHTML = `<span>Categories</span> <span>${data.categories.join(', ')}</span>`;
    } catch (error) {
        console.error('Error loading post data:', error);
        throw error;
    }
}

async function loadPostContent(postPath) {
    try {
        const response = await fetch(`/posts/${postPath}/content.md`);
        if (!response.ok) throw new Error('Post content not found');
        
        const markdown = await response.text();
        const html = marked.parse(markdown);
        document.getElementById('markdown-content').innerHTML = html;
    } catch (error) {
        console.error('Error loading post content:', error);
        throw error;
    }
}

async function loadImages(postPath) {
    const galleryContainer = document.getElementById('gallery');
  
    try {
        const response = await fetch(`/posts/${postPath}/images.json`);
        const images = await response.json();
        const galleryHTML = createGalleryHTML(images);
        galleryContainer.innerHTML = galleryHTML;
    } catch (error) {
        console.error('Error loading images:', error);
        // Fallback to directory scanning if json not found
        loadImagesFromDirectory(postPath);
    }
}


async function loadImagesFromDirectory(postPath) {
    const galleryContainer = document.getElementById('gallery');
  
    try {
        const response = await fetch(`/posts/${postPath}/images/`);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const images = Array.from(doc.querySelectorAll('a'))
            .filter(a => a.href.match(/\.(jpg|jpeg|png|gif)$/i))
            .map(a => a.href);
        
        const galleryHTML = createGalleryHTML(images);
        galleryContainer.innerHTML = galleryHTML;
    } catch (error) {
        console.error('Error loading images from directory:', error);
    }
}

function createGalleryHTML(images) {
    return `
        <div class="home container-fluid gallery" id="gallery">
            ${createVideoSlide()}
            ${images.map(img => `
                <div class="background background-post container-fluid mySlides" style="background-image: url('${img.trim()}');">
                </div>
            `).join('')}
            <button class="btn nav fa fa-2x display-left" onclick="plusDivs(-1)" id="left">&#10094;</button>
            <button class="btn nav fa fa-2x display-right" onclick="plusDivs(1)" id="right">&#10095;</button>
        </div>
    `;
}

function createVideoSlide() {
    // Only create video slide if URL exists
    const videoUrl = document.querySelector('script[data-vimeo-url]')?.dataset.vimeoUrl;
    if (!videoUrl) return '';
    
    return `
        <div class="background background-post container-fluid mySlides video-slide">
            <iframe 
                src="${videoUrl}"
                width="100%" 
                height="100%" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
}

function showError() {
    document.getElementById('title').textContent = 'Error loading post';
    document.getElementById('markdown-content').innerHTML = `
        <div class="error-message">
            Sorry, we couldn't load this post. Please try again later.
        </div>
    `;
}

if (document.readyState !== 'loading') {
    window.initializePost();
} else {
    document.addEventListener('DOMContentLoaded', window.initializePost);
}