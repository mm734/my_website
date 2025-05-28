const services = {
    newServices: [
        { id: "5021", name: "Instagram VIEWS + REELS + IGTV" },
        { id: "5022", name: "Facebook Likes" },
        { id: "5022", name: "Post LIKES" },
    ],
    popularServices: [
        { id: "5023", name: "Twitter Followers" },
        { id: "5024", name: "YouTube Subscribers" },
    ],
};

function updateServices() {
    const categorySelect = document.getElementById("category");
    const serviceSelect = document.getElementById("service");
    const selectedCategory = categorySelect.value;

    // Clear previous options
    serviceSelect.innerHTML = '<option value="">Select Service</option>';

    if (selectedCategory) {
        services[selectedCategory].forEach(service => {
            const option = document.createElement("option");
            option.value = service.id;
            option.textContent = service.name;
            serviceSelect.appendChild(option);
        });
    }
}

function updateDetails() {
    const serviceSelect = document.getElementById("service");
    const selectedServiceId = serviceSelect.value; // Get the selected service ID
    const detailBox = document.getElementById("detailBox");

    let details = "";

    // Use the selected service ID in the switch case
    switch(selectedServiceId) {
        case "5021": // Instagram VIEWS + REELS + IGTV
            details = `
            <h4>Details for Instagram VIEWS + REELS + IGTV</h4>
            <p>Speed: 5M/D</p>
            <p>Provider: Instant</p>
            <p>Min: 100 - Max: 100,000,000</p>
            <p>Description: This service provides real Instagram views, likes, and engagement.</p>
            `;
            break;
        case "5022": // Facebook Likes
            details = `
            <h4>Details for Facebook Likes</h4>
            <p>Speed: 10M/D</p>
            <p>Provider: Fast</p>
            <p>Min: 50 - Max: 50,000</p>
            <p>Description: This service will help increase your post likes significantly.</p>
            `;
            break;
        case "5023": // Twitter Followers
            details = `
            <h4>Details for Twitter Followers</h4>
            <p>Speed: 8M/D</p>
            <p>Provider: Reliable</p>
            <p>Min: 100 - Max: 100,000</p>
            <p>Description: Grow your Twitter following with real engagement.</p>
            `;
            break;
        case "5024": // YouTube Subscribers
            details = `
            <h4>Details for YouTube Subscribers</h4>
            <p>Speed: 4M/D</p>
            <p>Provider: Instant Previews</p>
            <p>Min: 150 - Max: 100,000</p>
            <p>Description: Enhance your channel visibility and engagement.</p>
            `;
            break;
        default:
            details = "<p>Please select a service to see the details.</p>";
    }
    detailBox.innerHTML = details;
}



function buyService() {
    const serviceSelect = document.getElementById("service");
    const selectedService = serviceSelect.value;
    if (selectedService) {
        alert(`You have selected service ID: ${selectedService}`);
    } else {
        alert('Please select a service.');
    }
}

function navigateTo(page) {
    switch (page) {
        case 'Services':
            window.location.href = 'index.html'; // Replace with your actual URL
            break;
        case 'mass-order':
            window.location.href = 'mass-order.html'; // Replace with your actual URL
            break;
        case 'tools':
            window.location.href = 'pp1/instagram-tools.html'; // Replace with your actual URL
            break;
        case 'add-funds':
            window.location.href = 'add-funds.html'; // Replace with your actual URL
            break;
        case 'topsell':
            window.location.href = 'topsell.html'; // Replace with your actual URL
            break;
        case 'achievements':
            window.location.href = 'achievements.html'; // Replace with your actual URL
            break;
        case 'contactus':
            window.location.href = 'contactus/contactus.html'; // Replace with your actual URL
            break;
        default:
            console.log("Page not found");
    }
}

document.addEventListener('DOMContentLoaded', function()
{
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn')
    menuIcon.addEventListener('click', function() {
        sidebar.classList.add('active');
    });
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

document.addEventListener('click', function(event) {
        if (
            window.innerWidth <= 900 &&
            sidebar.classList.contains('active') &&
            !sidebar.contains(event.target) &&
            event.target !== menuIcon
        ) {
            sidebar.classList.remove('active');
        }
});
});


function throwConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const shapes = ['⭐', '✨', '🌟', '💫', '🔆', '🟡', '🟣', '🔵', '🟠', '🔴'];
    const confettiCount = 150; // Adjust as desired

    // Center of the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < confettiCount; i++) {
        const conf = document.createElement('span');
        conf.className = 'confetti';
        conf.innerText = shapes[Math.floor(Math.random() * shapes.length)];

        // Start at center
        conf.style.left = `${centerX}px`;
        conf.style.top = `${centerY}px`;

        // Random angle and distance
        const angle = Math.random() * 2 * Math.PI;
        const distance = 100 + Math.random() * 400; // px

        // Calculate end position
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        // Set animation using CSS variables or inline style
        conf.style.setProperty('--tx', `${x}px`);
        conf.style.setProperty('--ty', `${y}px`);

        // Random color
        conf.style.color = `hsl(${Math.random() * 360}, 85%, 65%)`;

        // Random size
        conf.style.fontSize = (0.9 + Math.random() * 0.9) + 'em';

        // Random animation delay for more natural effect
        conf.style.animationDelay = (Math.random() * 0.2) + 's';

        // Custom animation for each confetti
        conf.style.animation = `confetti-fall 1.2s cubic-bezier(.62,.01,.42,1.06) forwards`;
        conf.style.transform = `translate(0,0)`;

        // Add a custom keyframe for each confetti for unique direction
        conf.animate([
            { opacity: 1, transform: 'translate(0,0) scale(1) rotate(0deg)' },
            { opacity: 1, offset: 0.7 },
            { opacity: 0, transform: `translate(${x}px, ${y}px) scale(0.7) rotate(360deg)` }
        ], {
            duration: 1200 + Math.random() * 400,
            delay: Math.random() * 2,
            fill: 'forwards'
        });

        confettiContainer.appendChild(conf);

        // Remove after animation
        setTimeout(() => conf.remove(), 1800);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ... your other DOMContentLoaded code (sidebar, etc.) ...

    // Attach confetti to the Explore Services button
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default if the button is inside a form or is a submit button
            throwConfetti();
            // Optionally, redirect after a short delay:
            // setTimeout(() => navigateTo('services'), 800);
        });
    }
});

