/ Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.main-menu').classList.toggle('active');
});

// Simulate loading more news when scrolling
window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        // In a real app, you would fetch more news articles here
        console.log('Load more news...');
    }
});

// Search functionality
document.querySelector('.search-bar button').addEventListener('click', function(e) {
    e.preventDefault();
    const query = document.querySelector('.search-bar input').value;
    if (query.trim() !== '') {
        alert(`Searching for: ${query}`);
        // In a real app, you would redirect to search results or fetch them
    }
});

// Newsletter subscription
document.querySelector('.newsletter button').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter input').value;
    if (email.trim() !== '' && email.includes('@')) {
        alert(`Thank you for subscribing with ${email}`);
        document.querySelector('.newsletter input').value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// Simulate live updating of breaking news
setInterval(() => {
    const ticker = document.querySelector('.ticker-content');
    const firstItem = ticker.children[0];
    ticker.appendChild(firstItem.cloneNode(true));
    firstItem.remove();
}, 10000);