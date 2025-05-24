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
