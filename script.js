
function navigateTo(page) {
    switch (page) {
        case 'Services':
            window.location.href = 'index.html'; // Replace with your actual URL
            break;
        case 'Proofs':
            window.location.href = 'proof/proofs.html'; // Replace with your actual URL
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
            window.location.href = 'achievements/achievement.html'; // Replace with your actual URL
            break;
        case 'contactus':
            window.location.href = 'contactus/contactus.html'; // Replace with your actual URL
            break;
        default:
            console.log("Page not found");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn')
    menuIcon.addEventListener('click', function () {
        sidebar.classList.add('active');
    });
    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
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

document.addEventListener('DOMContentLoaded', function () {
    // ... your other DOMContentLoaded code (sidebar, etc.) ...

    // Attach confetti to the Explore Services button
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default if the button is inside a form or is a submit button
            throwConfetti();
            // Optionally, redirect after a short delay:
            // setTimeout(() => navigateTo('services'), 800);
        });
    }
});

// Service list

const services = {
    newServices: [

    ],
    popularServices: [

    ],
    exclusiveServices: [

    ],
    instagramServices: [
        { id: "5001", name: "[5001] - 🎦🎥Instagram VIEWS + REELS + IGTV | 𝐒𝐩𝐞𝐞𝐝 : 10M/𝐃 | INSTANT🔥🔥 - ₹7.00 per 1000 " },
        { id: "5002", name: "[5002] - 🎦🎥Instagram VIEWS + REELS + IGTV | 𝐒𝐩𝐞𝐞𝐝 : 1M/𝐃 | HIGH QUALITY🔥🔥 - ₹10.00 per 1000" },
        { id: "5003", name: "[5003] - ❣️ Instagram Likes [BOTS] NO DP | 5K-10K/D | NO REFILL - CHEAPEST ON MARKET - ₹9.00 per 1000" },
        { id: "5004", name: "[5004] - ❣️ Instagram Likes [POST/REELS/IGTV] [BOT MIX PROFILES] NO DP- ₹19.00 per 1000" },
        { id: "5005", name: "[5005] - ❣️ Instagram Likes [𝟏𝟎𝟎% 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏]| 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 - HQ🔥🔥 - ₹49.00 per 1000" },
        { id: "5006", name: "[5006] - 🥇🇮🇳 Instagram Likes [Power] [𝑰𝑵𝑫𝑰𝑨𝑵] [𝙎𝙏𝙊𝙍𝙄𝙀𝙎 + 𝙍𝙀𝘼𝙇 𝘼𝘾𝙏𝙄𝙑𝙀] - - ₹103.00 per 1000" },
        { id: "5007", name: "[5007] - 🥇🇮🇳 𝐍𝐄𝐖 Instagram Likes [𝑰𝑵𝑫𝑰𝑨𝑵] - INDIAN LIKES PREMIUM - RECOMMENDED 👌👌🔥🔥 - ₹109.75 per 1000" },
        { id: "5008", name: "[5008] - 🥇🇮🇳 Instagram Likes [Power] [𝑰𝑵𝑫𝑰𝑨𝑵] [𝐑𝐄𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 𝐕𝐈𝐀 𝐀𝐃𝐒] [100% 𝑵𝑶𝑵 𝑫𝑹𝑶𝑷] - MORE GROW PROFILE🔥🔥 - ₹199.00 per 1000" },
        { id: "5009", name: "[5009] - 💥 Instagram Followers [MIXED] FLAG OFF ONLY - NO REFILL 🎉 - ₹89.00 per 1000" },
        { id: "5010", name: "[5010] - 💥 Instagram Followers | 𝐀𝐋𝐋 𝐀𝐂𝐂𝐎𝐔𝐍𝐓𝐒 | 𝐌𝐈𝐗 !! | 𝐅𝐀𝐒𝐓 | 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 🔥🔥 - 30 DAYS REFILL - ₹149.908 per 1000" },
        { id: "5011", name: "[5011] - 💥 Instagram Followers | 𝐀𝐋𝐋 𝐀𝐂𝐂𝐎𝐔𝐍𝐓𝐒 | 𝐌𝐈𝐗 !! | 𝐅𝐀𝐒𝐓 | 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 🔥🔥 - 90 DAYS REFILL - ₹169.908 per 1000" },
        { id: "5012", name: "[5012] - 💥 𝐍𝐄𝐖 Instagram Followers | 𝐀𝐋𝐋 𝐀𝐂𝐂𝐎𝐔𝐍𝐓𝐒 | 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏 || 𝐎𝐋𝐃 𝐀𝐂𝐎𝐔𝐍𝐓𝐒| 𝐒𝐔𝐏𝐄𝐑 𝐅𝐀𝐒𝐓 | 𝐈𝐍𝐒𝐓𝐀𝐍𝐓 🚀 - 365 DAYS REFILL🔥🔥♻️ - ₹249.63 per 1000" },
        { id: "5013", name: "[5013] - 💥 Instagram Followers [𝐀𝐋𝐋 𝐋𝐈𝐍𝐊𝐒] |🇮🇳𝐈𝐍𝐃𝐈𝐀𝐍 𝐌𝐈𝐗 + 𝐆𝐋𝐎𝐁𝐀𝐋!!| 𝐒𝐏𝐄𝐄𝐃 : 5𝟎𝐊/𝐃 - 365 DAYS REFILL ♻️🔥🔥 - ₹299.72 per 1000" },
        { id: "5014", name: "[5014] - 💥🇮🇳 Instagram Followers Real [𝑰𝑵𝑫𝑰𝑨𝑵] + 𝐒𝐓𝐎𝐑𝐈𝐄𝐒 & 𝐇𝐈𝐆𝐇𝐋𝐈𝐆𝐇𝐓𝐒 🔥 🔥 - LIFETIME 🔥 - ₹455.19 per 1000" },
        { id: "5015", name: "[5015] - ✉️ Instagram Comment [CUSTOM] - INDIAN MIX 🔥 - START : 24H + - ₹299.141 per 1000" },
        { id: "5016", name: "[5016] - 🌍Instagram Story [Views + Reach] - BEST🔥🔥 - ₹39.874 per 1000" },
        { id: "5022", name: "[5022] - 🌍Instagram Story [Views] - BEST🔥 - ₹35.558 per 1000" },
        { id: "5017", name: "[5017] - 🌍Instagram Story [POLL VOTE] - [YES] - ₹69.009 per 1000" },
        { id: "5018", name: "[5018] - 🌍Instagram Story [POLL VOTE] - [NO] - ₹69.009 per 1000" },
        { id: "5019", name: "[5019] - 🌍 Instagram Post / Reels [REACH + IMPRESSIONS] - CHEAPEST - ₹36.28 per 1000" },
        { id: "5020", name: "[5020] - 🌍 Instagram Saves [Post / Reels] - Fast🔥 - ₹39.20 per 1000" },
        { id: "5021", name: "[5021] - 📈 Instagram [REEL /POST] - SHARES - LIFETIME - MAIN PROVIDER🔥🔥 - ₹39.807 per 1000" },
    ],
    youtubeServices: [
        { id: "6001", name: "[6001] - ▶️ Youtube Views [𝐀𝐃 𝐕𝐈𝐄𝐖𝐒] | 𝐒𝐏𝐄𝐄𝐃 :𝟏𝐌+/𝐃 | 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏 | SUPER FAST🔥🔥⚡⚡ - ₹169.684 per 1000" },
        { id: "6002", name: "[6002] - ▶️ Youtube Views [𝟏𝟎𝟎% 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏] 𝐍𝐀𝐓𝐈𝐕𝐄 𝐀𝐃𝐒 - 𝟏𝟎𝟎% 𝐑𝐄𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 | SPEED :𝟏𝐌-𝟐𝐌/𝐇𝐎𝐔𝐑 - LIFETIME🔥🔥 - ₹249.902 per 1000" },
        { id: "6003", name: "[6003] - 𝓝𝑬𝓦 ▶️ Youtube Special Views [20K-50K+/D] - LIFETIME GUARANTEE🔥🔥🔥 - ₹149.96 per 1000" },
        { id: "6004", name: "[6004] - ▶️ Youtube Likes [10K-30K/D] - NO REFILL 🔥 - ₹49.32 per 1000" },
        { id: "6005", name: "[6005] - ▶️ 👍Youtube Likes [HQ] [NON DROP] | SPEED : 100K/D - FAST🔥🔥 - ₹99.80 per 1000" },
        { id: "6006", name: "[6006] - ▶️ 👍Youtube Likes [HQ] [NON DROP] [100K-200K/D ] - INSTANT - 365 DAYS REFILL🔥🔥 - ₹159.83 per 1000" },
        { id: "6007", name: "[6007] - 🆕 ⭕️ Youtube Real Like - ⭐️For Indian Songs , Movie Trailer & Influencers Video - ⚡️Super Fast [ 50k-200k/Day ] - 🔥No Drop - 💎1 Month Guarantee - ₹199.35 per 1000" },
        { id: "6008", name: "[6008] - 🆕⛔YouTube Subscriber 🌟CHEAPEST IN WORLD ✅OWN SERVER 🚫NO REFILL 🚀Speed: upto 5k per day 🎯Random Drop - ₹59.08 per 1000" },
        { id: "6009", name: "[6009] - 𝐍𝐄𝐖▶️ Youtube Subscribers [𝐍𝐎𝐍 𝗗𝗥𝗢𝗣] [SPEED - 100-500/D] - BEST🔥🔥 - ₹299.60 per 1000" },
        { id: "6010", name: "[6010] - 𝐍𝐄𝐖 ▶️Youtube Subscribers [𝟭𝟬𝟬% 𝗡𝗢𝗡 𝗗𝗥𝗢𝗣] [SEARCH CHANNEL + SUBSCRIBER] - CHANNEL HIGHGROWTH🔥🔥🔥🔥🔥🔥 - ₹799.01 per 1000" },
    ],
    telegramServices: [
        { id: "4001", name: "[4001] - 🆃 Telegram Post Views [ ANY POST VIEWS] - NORMAL SPEED - CHEAPEST - ₹9 per 1000" },
        { id: "4002", name: "[4002] - 🆃 Telegram Post Views [ Last 50 post ] - CHEAPEST ON WHOLE MARKET 🔥 - ₹49.353 per 1000" },
        { id: "4003", name: "[4003] - 🆃 Telegram Public Channel Members [REAL] [REFILL 30 DAYS] - CHEAPEST IN MARKET🔥🔥🔥🔥 - ₹149.76 per 1000" },
        { id: "4004", name: "[4004] - 🆃 Telegram Mix Positive Reactions[👍❤️🔥🎉😁] + Free Views - FAST !! - ₹25.36 per 1000" },
        { id: "4005", name: "[4005] - 🆃 Telegram MIX MEMBERS !! - NO REFILL - ALL DROP LATER = CHEAPEST🔥 - ₹29.01 per 1000" },
        { id: "4006", name: "[4006] - 🆃 Telegram Members [𝐍𝐎𝐍 𝐃𝐑𝐎𝐏] [𝐒𝐏𝐄𝐄𝐃 : 𝟓𝐊-𝟐𝟎𝐊/𝐃] - 𝟔𝟎 𝐃𝐀𝐘𝐒 𝐎𝐍𝐋𝐘🔥 - ₹189.51 per 1000" },
        { id: "4007", name: "[4007] - 🆃 🇮🇳 Telegram Public Channel / Group Members [𝑰𝑵𝑫𝑰𝑨] - SLOWEST CHEAP ON MARKET - ₹199.78 per 1000" },
    ],
    tiktokServices: [

    ],
    facebookServices: [
        { id: "7001", name: "[7001] - 🅵 Facebook Post [Likes] [EMOJI] [ 𝐋𝐨𝐯𝐞 ] ❤️ - HIGH QUALITY FAST - ₹199.56 per 1000" },
        { id: "7002", name: "[7002] - 🅵 Facebook Views / Plays [Reel] - NEW 🔥🔥 - ₹29.23 per 1000" },
        { id: "7003", name: "[7003] - 🅵 Facebook Post [Likes] - No Refill🔥 - ₹79.79 per 1000" },
        { id: "7004", name: "[7004] - 🅵 Facebook Page [LIKES + FOLLOWS] - [ALL PAGES] |5K-10K/D - 30 DAYS REFILL🔥 - ₹249.23 per 1000" },
        { id: "7005", name: "[7005] - 🅵 Facebook Views [𝐕𝐈𝐃𝐄𝐎/𝐑𝐄𝐄𝐋𝐒] 50K-100K/D - CHEAPEST🔥🔥 - ₹9.6 per 1000" },
        { id: "7006", name: "[7006] - 🅵 Facebook Share [𝐕𝐈𝐃𝐄𝐎 / 𝐏𝐎𝐒𝐓 / 𝐏𝐇𝐎𝐓𝐎] | 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 - MIN 100 - ₹29.69 per 1000" },
        { id: "7007", name: "[7007] - 🅵 Facebook Page [𝐋𝐈𝐊𝐄𝐒 + 𝐅𝐎𝐋𝐋𝐎𝐖𝐒] [𝐈𝐍𝐃𝐈𝐀𝐍 𝐌𝐈𝐗] [𝐒𝐏𝐄𝐄𝐃 : 𝟐𝐊-𝟓𝐊/𝐃] - 30 DAYS 🔥🔥🔥 - ₹199.276 per 1000" },
        { id: "7008", name: "[7008] - 🅵 Facebook Views | 𝟏𝟎 𝐒𝐄𝐂𝐎𝐍𝐃𝐒 𝐑𝐄𝐓𝐄𝐍𝐓𝐈𝐎𝐍 | 𝐌𝐎𝐍𝐄𝐓𝐈𝐙𝐀𝐁𝐋𝐄 | 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟓𝟎𝟎𝐊/𝐃 - SLOW🔥 - ₹120.64 per 1000" },
        { id: "7009", name: "[7009] - Facebook Views | 𝟏 𝐌𝐈𝐍 𝐑𝐄𝐓𝐄𝐍𝐓𝐈𝐎𝐍 | 𝐌𝐎𝐍𝐄𝐓𝐈𝐙𝐀𝐁𝐋𝐄 | 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟓𝟎𝟎𝐊/𝐃 - SLOW🔥 - ₹169.63 per 1000" },
        { id: "7010", name: "[7010] - 🅵 Facebook Live Stream Views [𝟑𝟎 𝐌𝐈𝐍𝐒 ] - (START : 15 MINS) 🔥 - ₹159.96 per 1000" },
    ],
    spotifyServices: [

    ],
    binstagramServices: [
        { id: "5101", name: "[5101] - 🎦🎥Instagram VIEWS | 𝐒𝐩𝐞𝐞𝐝 : 10M/𝐃 | INSTANT🔥🔥 - ₹99.00 per 100K " },
        { id: "5102", name: "[5102] - 🎦🎥Instagram VIEWS | 𝐒𝐩𝐞𝐞𝐝 : 10M/𝐃 | INSTANT🔥🔥 - ₹299.00 per 500K " },
        { id: "5103", name: "[5103] - 🎦🎥Instagram VIEWS | 𝐒𝐩𝐞𝐞𝐝 : 10M/𝐃 | INSTANT🔥🔥 - ₹499.00 per 1 MILLION " },
        { id: "5104", name: "[5104] - ❣️ Instagram Likes [BOTS] NO DP | 5K-10K/D | NO REFILL - CHEAPEST ON MARKET - ₹79.00 per 10,000" },
        { id: "5105", name: "[5105] - ❣️ Instagram Likes [𝟏𝟎𝟎% 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏]| 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 - HQ🔥🔥 - ₹299.00 per 10,000" },
        { id: "5106", name: "[5106] - 🥇🇮🇳 Instagram Likes [Power] [𝑰𝑵𝑫𝑰𝑨𝑵] [𝙎𝙏𝙊𝙍𝙄𝙀𝙎 + 𝙍𝙀𝘼𝙇 𝘼𝘾𝙏𝙄𝙑𝙀] - - ₹799.00 per 10,000" },
        { id: "5107", name: "[5107] - 💥 Instagram Followers [MIXED] FLAG OFF ONLY - NO REFILL 🎉 - ₹699.00 per 10,000" },
        { id: "5108", name: "[5108] - 💥 𝐍𝐄𝐖 Instagram Followers | 𝐀𝐋𝐋 𝐀𝐂𝐂𝐎𝐔𝐍𝐓𝐒 | 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏 || 𝐎𝐋𝐃 𝐀𝐂𝐎𝐔𝐍𝐓𝐒| 𝐒𝐔𝐏𝐄𝐑 𝐅𝐀𝐒𝐓 | 𝐈𝐍𝐒𝐓𝐀𝐍𝐓 🚀 - 365 DAYS REFILL🔥🔥♻️ - ₹1999.63 per 10,000" },

    ],
    byoutubeServices: [
        { id: "6101", name: "[6101] - ▶️ Youtube Subscribers [𝟭𝟬𝟬% 𝗡𝗢𝗡 𝗗𝗥𝗢𝗣] [SUPER FAST] - [10,000 SUBSCRIBERS PACKAGE] ⭐⭐🔥🔥🔥 🔥 - ₹2499.00 per 10000" },
        { id: "6102", name: "[6102] - ▶️ Youtube Views [50K PACKAGE ] [NON DROP] - Super Fast 🔥🔥 - ₹119.76 per 1000" },
        { id: "6103", name: "[6103] - ▶️ 👍Youtube Likes [HQ] [NON DROP] [100K-200K/D ][10K PACKAGE ]- INSTANT - 365 DAYS REFILL🔥🔥 - ₹139.83 per 1000" },
    ],
    btelegramServices: [

    ],
}

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
    switch (selectedServiceId) {
        // instagram services
        case "5001":
            details = `<p>Start: 0-1H</p><p>Speed: 1M / H</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 25 Mins</p><br><p>CHEAPEST SERVICE</p><p>GOOD SPEED</p> `; break;
        case "5002":
            details = `<p>Start: 0-1H</p><p>Speed: 500K-1M/D</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 20 Mins</p><p> FAST IG REELS & VIEWS</p>`; break;
        case "5003":
            details = `<p>Quality: mix</p><p>Start: 0-1H</p><p>Speed:50K/D</p><p>Refill: NOT</p><p>Average: 12 Mins</p><br><p>🔥NEW CHEAPEST ON MARKET</p><p>🔥 MIX PROFILES</p><p>🔥NO GUARANTEEE</p> `; break;
        case "5004":
            details = `<p>Quality: REAL LOOKING</p><p>Start: 0-1H</p><p>Speed: 50K+/D</p><p>Refill: NOT</p><p>Average: 10 Mins</p><br><p>🔥 MIX PROFILES</p><p>🔥 NO DROP SEEN</p><p>🔥WORKS FOR ALL REEL / IGTV / POST VIEWS</p>`; break;
        case "5005":
            details = `<p>Quality: REAL LOOKING</p><p>Start: INSTANT</p><p>Speed: 100K-500K/D</p><p>Refill: NON DROP</p><p>Average: 15 Mins</p><br><p>➔ 𝐀𝐁𝐎𝐔𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄:</p><p>🔥CHEAPEST NON DROP ACCOUNTS</p><p>🔥 STARTS : INSTANT</p><p>🔥 SPEED : 500K-1M/D (DEPENDS ON SERVER LOAD)</p><p>🔥MAX BASE 1M LIKES , CAN PLACE MULTIPLE ORDERS AFTER COMPLETION</p><p>🔥 100% NON DROP</p></p>`; break;
        case "5006":
            details = `<p>Start: 0-1H</p><p>Speed:10K-50K/D</p><p>Quality: INDIANS MIX</p><p>Refill: NON DROP</p><p>Average: 45 Mins</p><br><p>🔥INDIAN ONLY</p><p>🔥REAL INDIANS WITH STORIES</p><p>🔥 MOST ACCOUNTS HAVE HIGHLIGHTS TOO</p><p>🔥 REAL INDIANS MIX (90% - 99% INDIANS WILL COME)</p><p>🔥 START : 1H</p><p>🔥 SPEED : 1M/D</p><p>🔥 NON DROP</p>`; break;
        case "5007":
            details = `<p>Start: 0-1H</p><p>Speed: 100K/D</p><p>Quality: INDIANS</p><p>Refill: NON DROP</p><p>Average: 29 Mins</p><br><p>🔥100% INDIAN</p><p>🔥100% ACTIVE INDIANS</p><p>🔥 BEST SERVICE</p><p>🔥 INSTANT</p><p>🔥 SPEED : 100K/D</p><p>🔥 NON DROP</p>`; break;
        case "5008":
            details = `<p>Start: 0-1H</p><p>Speed: 10K/D</p><p>Quality: REAL + LIKES VIA INSTAGRAM ADS ONLY</p><p>Refill: NON DROP</p><p>Average: 3 Hrs and 10 Mins</p><br><p>⭐YOUR POST WILL GET REAL USERS LIKES VIA ADS AND BOOST YOUR POST !</p><p>⭐100%𝑰𝑵𝑫𝑰𝑨𝑵 ADS USERS LIKES</p><p>⭐100% NON DROP LIKES</p>`; break;
        case "5009":
            details = `<p>Quality: MIX</p><p>Start: 0-1H</p><p>Speed: 50K/D</p><p>Refill: NOT</p><p>Average: 20 Mins</p><br><p>⚠️MAKE SURE YOUR FLAG IS OFF - BEFORE PLACING ORDER OR ELSE NO REFUND IF FLAG IS ON⚠️</p><p>📝 NO GUARANTEE / NO REFILL</p>`; break;
        case "5010":
            details = `<p>Start: 0-1H</p><p>Speed: 50K-100K / Day</p><p>Quality: MIX</p><p>Refill: 30 Days</p><p>Average: 25 Mins</p><br><p>📢📌 𝐓𝐔𝐑𝐍 𝐎𝐅𝐅 𝐅𝐋𝐀𝐆 𝐑𝐄𝐕𝐈𝐄𝐖 𝐓𝐎 𝐆𝐄𝐓 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 𝐒𝐏𝐄𝐄𝐃</p><p>📌𝐓𝐔𝐑𝐍 𝐎𝐍 𝐅𝐋𝐀𝐆 𝐑𝐄𝐕𝐈𝐄𝐖 𝐓𝐎 𝐆𝐄𝐓 𝟏𝟎𝟎-𝟓𝟎𝟎/𝐃 𝐒𝐏𝐄𝐄𝐃</p><br><p>Disable 'Mark for Review' before ordering Followers</p><p>STEPS</p><p>📌 1. Go to 'Settings and Actions'</p><p>📌 2. Select 'Invite and follow friends'❗❗❗❗</p><p>📌 3. Disable Mark for Review❗❗❗❗<br><p>🔥INDIAN MIX QUALITY FOLLOWERS🔥</p><p>🔥 ACCOUNTS WILL HAVE POSTS + GOOD PROFILES ALSO</p><p>🔥 HIGH SPEED</p><p>🔥 IF YOUR ORDER IS SLOW - KINDLY TURN OFF YOUR FLAG FOR REVIEW</p><br><p>📌 𝐑𝐄𝐅𝐈𝐋𝐋 & 𝐃𝐑𝐎𝐏 :</p><p>🔆𝗗𝗿𝗼𝗽 𝗥𝗮𝘁𝗶𝗼 : 0-15% (On New Profiles Only , If you have high amount of Followers , We dont gurantee this percent , your old followers can drop )</p><p>🔆 𝗥𝗲𝗳𝗶𝗹𝗹 : 30 Days Refill only !!</p><p>🆘NOTE - : If you old followers dropping too much , we dont refill strictly !</p>`; break;
        case "5011":
            details = `<p>Start: 0-1H</p><p>Speed: 50K-100K / Day</p><p>Quality: MIX</p><p>Refill: 90 Days</p><p>Average: 25 Mins</p><br><p>📢📌 𝐓𝐔𝐑𝐍 𝐎𝐅𝐅 𝐅𝐋𝐀𝐆 𝐑𝐄𝐕𝐈𝐄𝐖 𝐓𝐎 𝐆𝐄𝐓 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 𝐒𝐏𝐄𝐄𝐃</p><p>📌𝐓𝐔𝐑𝐍 𝐎𝐍 𝐅𝐋𝐀𝐆 𝐑𝐄𝐕𝐈𝐄𝐖 𝐓𝐎 𝐆𝐄𝐓 𝟏𝟎𝟎-𝟓𝟎𝟎/𝐃 𝐒𝐏𝐄𝐄𝐃</p><br><p>Disable 'Mark for Review' before ordering Followers</p><p>STEPS</p><p>📌 1. Go to 'Settings and Actions'</p><p>📌 2. Select 'Invite and follow friends'❗❗❗❗</p><p>📌 3. Disable Mark for Review❗❗❗❗<br><p>🔥INDIAN MIX QUALITY FOLLOWERS🔥</p><p>🔥 ACCOUNTS WILL HAVE POSTS + GOOD PROFILES ALSO</p><p>🔥 HIGH SPEED</p><p>🔥 IF YOUR ORDER IS SLOW - KINDLY TURN OFF YOUR FLAG FOR REVIEW</p><br><p>📌 𝐑𝐄𝐅𝐈𝐋𝐋 & 𝐃𝐑𝐎𝐏 :</p><p>🔆𝗗𝗿𝗼𝗽 𝗥𝗮𝘁𝗶𝗼 : 0-15% (On New Profiles Only , If you have high amount of Followers , We dont gurantee this percent , your old followers can drop )</p><p>🔆 𝗥𝗲𝗳𝗶𝗹𝗹 : 90 Days Refill only !!</p><p>🆘NOTE - : If you old followers dropping too much , we dont refill strictly !</p>`; break;
        case "5012":
            details = `<p>Start: 0-1H</p><p>Speed: 10K - 20K/D</p><p>Refill: 365 Days</p><p>Average: 105 Mins</p><br><p>🔥SMMSM OLD ACCOUNT MIX FOLLOWERS !!</p><br><p>🔥𝐀𝐁𝐎𝐔𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄 :</p><p>Speed: 10K-20K/D</p><p>- REFILL : 365 DAYS</p><p>- DROP : NON DROP ( NON DROP ONLY ON NEW PROFILES FROM 0 . IF YOU HAVE OLD FOLLOWERS WHICH TAKEN FROM OTHER SERVICES , THEN IT CAN DROP .)</p><p>-NOTE : REFILL WILL BE DONE ONLY IF THIS SERVICE FOLLOWERS DROP , WE DONT REFILL FOR OTHER SERVICE FOLLOWERS</p><p>🔥𝐒𝐄𝐑𝐕𝐈𝐂𝐄 𝐐𝐔𝐀𝐋𝐈𝐓𝐘 :</p><p>- OLD ACCOUNTS</p><p>- GLOBAL MIX QUALITY</p><p>- 365 DAYS GUARANTEE ONLY</p><br><p>🔥𝐈𝐌𝐏𝐎𝐑𝐓𝐀𝐍𝐓 :</p><p>- If your Account Username is Changed ,you wont get any REFILL for your guarantee period</p><p>-Dont change to PRIVATE ACCOUNT , then you wont get AUTO-REFILL if there is DROP.</p>`; break;
        case "5013":
            details = `<p>Start: 0-1H</p><p>Speed: 20K-50K/D</p><p>Quality: Good</p><p>Refill: 365 Days</p><p>Average: 1 Hours and 45 Mins</p><br><p>🔥REFILL :  365 DAYS GUARANTEE</p><p>🔥 100% NON DROP</p><p>🔥 INDIAN MIX FOLLOWERS</p><p>🔥 SOME ACCOUNTS HAVE STORIES TOO</p><p>🔥 IT WONT GO IN SPAM</p><p>🔥GOOD QUALITY FOLLOWERS.</p><br><p>🔥 365 DAYS REFILL GUARANTEE , ONLY REFILL WILL BE DONE FOR OUR FOLLOWERS STRICTLY , IF BUTTON REJECTED NO REFILL WILL BE DONE</p>`; break;
        case "5014":
            details = `<p>Quality: INDIAN LOOKING</p><p>Start: 0-9H</p><p>Speed: 500-1K/D</p><p>Refill: Lifetime</p><p>Average: Not Enough Data</p><br><p>🔥100% INDIAN ACCOUNTS ONLY</p><p>🔥MOST ACCOUNTS HAVE HIGHLIGHTS & STORIES TOO</p><p>🔥MOST ACCOUNTS HAVE 10-20 + POSTS</p><p>🔥OLD ACCOUNTS</p><p>🔥DROP - 0% DROP can possible</p><p>🔥 LIFETIME REFILL (Only Refill for Fresh Profiles if drop from our side , We dont refill for other drops strictly)</p><p>🔥 SLOW</p>`; break;
        case "5015":
            details = `<p>Start: 1 DAYS</p><p>Speed: 10+/ Day</p><p>Quality: INDIAN MIX + BOT</p><p>Refill: NOT</p><p>Average: 43 Hours and 13 Mins</p><p>INDIAN MIX + BOT PROFILE CUSTOM COMMENTS</p><p>NO GUARANTEE</p>`; break;
        case "5016":
            details = `<p>Story Views 50-70% views will come</p><p>Reach - 30-50%</p>`; break;
        case "5017":
            details = ``; break;
        case "5018":
            details = ``; break;
        case "5019":
            details = `<p>Instagram updates statistics takes 1-7 HRS</p>`; break;
        case "5020":
            details = `<p>WORKS FOR BOTH POST & REEL</p><p>%100 real</p><p>Stable, Always Working</p>`; break;
        case "5021":
            details = `<p>Start: 0-1H</p><p>Speed: 1M/D</p><p>Quality: REAL HQ</p><p>Refill: NON DROP</p><p>Average: 26 Mins</p><br><p>Description: 📈 POST SHARES</p><p>You dont get full shares , 80% you will receive !</p><p>After completion of ORDER IT TAKES 5-6 HOURS TO GET UPDATED!!</p>`; break;
        case "5022":
            details = `<p>Start Time: Instant -1H</p><p>Speed: 100K/ day</p><p>Refill: no</p><p>70% - 80% views</p><p>🔥Super fast</p>`; break;
        // bulk instagram services
        case "5101":
            details = `<p>Start: 0-1H</p><p>Speed: 500K-1M/D</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 20 Mins</p><p> FAST IG REELS & VIEWS</p>`; break;
        case "5102":
            details = `<p>Start: 0-1H</p><p>Speed: 500K-1M/D</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 20 Mins</p><p> FAST IG REELS & VIEWS</p>`; break;
        case "5103":
            details = `<p>Start: 0-1H</p><p>Speed: 500K-1M/D</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 20 Mins</p><p> FAST IG REELS & VIEWS</p>`; break;
        case "5104":
            details = `<p>Quality: mix</p><p>Start: 0-1H</p><p>Speed:50K/D</p><p>Refill: NOT</p><p>Average: 12 Mins</p><br><p>🔥NEW CHEAPEST ON MARKET</p><p>🔥 MIX PROFILES</p><p>🔥NO GUARANTEEE</p> `; break;
        case "5105":
            details = `<p>Quality: REAL LOOKING</p><p>Start: INSTANT</p><p>Speed: 100K-500K/D</p><p>Refill: NON DROP</p><p>Average: 15 Mins</p><br><p>➔ 𝐀𝐁𝐎𝐔𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄:</p><p>🔥CHEAPEST NON DROP ACCOUNTS</p><p>🔥 STARTS : INSTANT</p><p>🔥 SPEED : 500K-1M/D (DEPENDS ON SERVER LOAD)</p><p>🔥MAX BASE 1M LIKES , CAN PLACE MULTIPLE ORDERS AFTER COMPLETION</p><p>🔥 100% NON DROP</p></p>`; break;
        case "5106":
            details = `<p>Start: 0-1H</p><p>Speed:10K-50K/D</p><p>Quality: INDIANS MIX</p><p>Refill: NON DROP</p><p>Average: 45 Mins</p><br><p>🔥INDIAN ONLY</p><p>🔥REAL INDIANS WITH STORIES</p><p>🔥 MOST ACCOUNTS HAVE HIGHLIGHTS TOO</p><p>🔥 REAL INDIANS MIX (90% - 99% INDIANS WILL COME)</p><p>🔥 START : 1H</p><p>🔥 SPEED : 1M/D</p><p>🔥 NON DROP</p>`; break;
        case "5107":
            details = `<p>Quality: MIX</p><p>Start: 0-1H</p><p>Speed: 50K/D</p><p>Refill: NOT</p><p>Average: 20 Mins</p><br><p>⚠️MAKE SURE YOUR FLAG IS OFF - BEFORE PLACING ORDER OR ELSE NO REFUND IF FLAG IS ON⚠️</p><p>📝 NO GUARANTEE / NO REFILL</p>`; break;
        case "5108":
            details = `<p>Start: 0-1H</p><p>Speed: 10K - 20K/D</p><p>Refill: 365 Days</p><p>Average: 105 Mins</p><br><p>🔥SMMSM OLD ACCOUNT MIX FOLLOWERS !!</p><br><p>🔥𝐀𝐁𝐎𝐔𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄 :</p><p>Speed: 10K-20K/D</p><p>- REFILL : 365 DAYS</p><p>- DROP : NON DROP ( NON DROP ONLY ON NEW PROFILES FROM 0 . IF YOU HAVE OLD FOLLOWERS WHICH TAKEN FROM OTHER SERVICES , THEN IT CAN DROP .)</p><p>-NOTE : REFILL WILL BE DONE ONLY IF THIS SERVICE FOLLOWERS DROP , WE DONT REFILL FOR OTHER SERVICE FOLLOWERS</p><p>🔥𝐒𝐄𝐑𝐕𝐈𝐂𝐄 𝐐𝐔𝐀𝐋𝐈𝐓𝐘 :</p><p>- OLD ACCOUNTS</p><p>- GLOBAL MIX QUALITY</p><p>- 365 DAYS GUARANTEE ONLY</p><br><p>🔥𝐈𝐌𝐏𝐎𝐑𝐓𝐀𝐍𝐓 :</p><p>- If your Account Username is Changed ,you wont get any REFILL for your guarantee period</p><p>-Dont change to PRIVATE ACCOUNT , then you wont get AUTO-REFILL if there is DROP.</p>`; break;
        // youtue service
        case "6001":
            details = `<p>Start: 0-12H (can delay upto 24H , due to over orders)</p><p>Speed: 30K-100K/Day</p><p>Quality: REAL</p><p>Refill: NON DROP</p><br><p>🔥𝟏𝟎𝟎% 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏 𝐎𝐍𝐋𝐘</p><p>🔥𝐀𝐁𝐎𝐔𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄</p><p>Videos must be open to all countries.</p><p>30 Days Refill</p><br><p>🔥NOTE - DONT KEEP ANY AGE RESTRICTIONS OR ANY OTHER THING AS RESTRICTIONS TO VIDEOS</p>`; break;
        case "6002":
            details = `<p>Start: 0-1H</p><p>Speed: 1M/ HOUR</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 5 Mins</p><br><p>🔥100% NON DROP SERVICE</p><p>🔥LIFETIME GUARANTEE IF OUR VIEWS DROP !!</p><p>🔥REAL USERS VIEWS , NEVER DROP !!</p><p>Views show in Studio first, then on YouTube after 4-5 hrs</p><br><p>NOTE: REMOVE AGE, COUNTRY, CATEGORY RESTRICTIONS</p>`; break;
        case "6003":
            details = `<p>Start: 0-1H</p><p>Speed: 10K-20K/D</p><p>Quality: REAL</p><p>Refill: NON DROP</p><br><p>🔥ABOUT SERVICE - LOW DROP VIEWS</p><p>WORKS ON BOTH SHORTS AND NORMAL VIDEOS</p><p>LIFETIME GUARANTEE</p>`; break;
        case "6004":
            details = `<p>Start: 0-1H</p><p>Speed: 10K-20K/Day</p><p>Quality: REAL</p><p>Refill: NOT</p><br><p>🔥ABOUT SERVICE - FAST SERVICE</p><p>CAN DROP ANY TIME, NO GUARANTEE</p><p>NO REFILL !!</p>`; break;
        case "6005":
            details = `<p>Start: 0-1H</p><p>Speed: 50K/ Day</p><p>Quality: REAL + HQ USERS</p><p>Refill: 30 Days</p><p>Average: 15 Mins</p><br><p>⭐NON DROP</p><p>⭐FRESH LINK UPTO 100K CAN BE VERY FAST</p><p>⭐100K/D Speed</p><p>⭐30 DAYS REFILL GUARANTEE , BUT CURRENTLY NO DROP !!</p>`; break;
        case "6006":
            details = `<p>Start: 0-1H</p><p>Speed: 100K-300K/D</p><p>Quality: REAL + HQ USERS</p><p>Refill: NON DROP</p><p>Average: 5 Mins</p><br><p>⭐NON DROP</p><p>⭐BEST FOR BIG TRAILERS</p><p>⭐365 DAYS REFILL GUARANTEE , BUT CURRENTLY NO DROP !!</p>`; break;
        case "6007":
            details = `<p>⭐️For Indian Songs , Movie Trailer & Influencers Video</p><p>Start: 0-1H</p><p>Speed: 50k-200k / Day [Slow if Overload]</p><p>Refill: 30 Days</p><p>Geo: India Majority</p><p>Drop ratio: Not Expected</p><br><p>⚠️Video Likes must be Public & Open for All Countries</p><p>Notes: Account must be PUBLIC</p><p>Alert: Do not make changes to video or archive after ordering</p>`; break;
        case "6008":
            details = `<p>Start: 0-2H</p><p>Speed: 5k/Day [Slow if Overload]</p><p>Refill: No</p><p>Drop Ratio: Expected</p><br><p>Subscribers must be Public & Open for All Countries</p><p>✅Faster Speed with 1-3 Videos on Channel</p>`; break;
        case "6009":
            details = `<p>Start: 0-4H</p><p>Speed: 100-500/Day</p><p>Quality: REAL + HQ ACTIVE</p><p>Refill: NON DROP</p><p>Average: 8 Hours 10 Mins</p><br><p>🔥Drop Ratio: LOW DROP or 0-15%</p><p>🔥30 DAYS REFILL AVAILABLE</p><p>🔥Channel must be PUBLIC and have at least one video > 2 mins</p>`; break;
        case "6010":
            details = `<p>Start: 0-12H</p><p>Speed: 30-50/Day</p><p>Quality: REAL + HQ ACTIVE</p><p>Refill: NON DROP</p><p>Average: 5 Hours 40 Mins</p><br><p>🔥Users search your channel name, then subscribe - 1000% NON DROP</p><p>🔥Recommended Channel Boost</p><p>🔥30 DAYS REFILL ONLY</p><br><p>⚠️Channel must have 3-5 min videos</p><p>⚠️Make Subscribers Count PUBLIC</p>`; break;
        // youtube bulk service
        case "6101":
            details = `<p>Start: 0-24H (May start in 4-12H)</p><p>Speed: 500-2K/Day</p><p>Quality: REAL + HQ ACTIVE</p><p>Refill: NON DROP</p><p>Average: COMPLETE IN 6-10 DAYS</p><br><p>🔥10,000 SUBSCRIBERS NON DROP PACKAGE!!</p><p>🔥30 DAYS REFILL ONLY IF DROP</p><p>🔥CHANNEL GROWTH + MONETIZATION SUBSCRIBERS</p><p>🔥SUPER FAST AND 100% NON DROP !!</p><p>🔥BIG CHANNELS CAN BUY THIS PACKAGE !!</p>`; break;
        case "6102":
            details = `<p>Start: 0-12H (Ads Approval May Delay)</p><p>Speed: SUPER FAST</p><p>Quality: REAL ADS VIEWS + HIGH REVENUE</p><p>Refill: NON DROP</p><p>Average: COMPLETE IN 24-48HRS</p><br><p>%100 Real ADS Views</p><p>🔥Never Drop!</p>`; break;
        case "6103":
            details = `<p>Start: 0-1H</p><p>Speed: 100K-300K/D</p><p>Quality: REAL + HQ USERS</p><p>Refill: NON DROP</p><p>Average: 5 Mins</p><br><p>⭐NON DROP</p><p>⭐BEST FOR BIG TRAILERS</p><p>⭐365 DAYS REFILL GUARANTEE , BUT CURRENTLY NO DROP !!</p>`; break;
        // telegram services
        case "4001":
            details = `<p>Start: 1-2H</p><p>Quality: REAL</p><p>🔥 Cheapest Working Telegram New Post Views for Public Channel</p><p>🔥 100% Delivery Guaranteed</p>`; break;
        case "4002":
            details = `<p>Start: 0-1H</p><p>Speed: 15K / DAY</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 20 Mins</p><br><p>🔥 Views will be Added to Last 50 Posts</p><p>🔥 If your channel doesn't have 50 posts, views will be added to available posts only</p>`; break;
        case "4003":
            details = `<p>Start: 0-2H</p><p>Speed: 5K / DAY</p><p>Quality: REAL</p><p>Refill: 30 Days</p><p>Average: 1 Hour 33 Mins</p><br><p>⭐ HQ PROFILES</p><p>⭐ Mostly Low Drop</p><p>⭐ No cancellation if channel link is changed or deleted</p>`; break;
        case "4004":
            details = `<p>Start: 0-1H</p><p>Speed: 1K / DAY</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 20 Mins</p><br><p>🔥 Reactions will be randomly spread across post</p><p>🔥 Enter last post link only, not channel link</p>`; break;
        case "4005":
            details = `<p>Start: 0-3H</p><p>Speed: 1K-5K / DAY</p><p>Quality: REAL</p><p>Refill: NOT</p><br><p>🔥 CHEAP FAST WORKING</p><p>🔥 ALL DROP LATER</p><p>🔥 NO REFILL</p>`; break;
        case "4006":
            details = `<p>Start: 0-1H</p><p>Speed: 5K-20K / DAY</p><p>Refill: 60 Days</p><p>Average: 1 Hour 25 Mins</p><br><p>🔥 FAST</p><p>🔥 REFILL VALID ONLY FOR 60 DAYS</p><p>🔥 No refill for old drops or changed/deleted channel</p>`; break;
        case "4007":
            details = `<p>Start: 0-2H</p><p>Speed: 100-1K / DAY</p><p>Quality: REAL</p><p>Refill: NOT</p><br><p>🔥 100% INDIAN USERS</p><p>🔥 SLOWEST DELIVERY</p><p>🔥 NO GUARANTEE</p><p>⭐ No cancellation if channel link is changed or deleted</p>`; break;

        case "7001":
            details = `<p>Start: 0-1H</p><p>Speed: 5K / Day</p><p>Quality: REAL + HIGH QUALITY INDIANS</p><p>Refill: 30 Days</p><p>Average: 10 Mins</p><p>GLOBAL HIGH QUALITY POST LIKES FAST</p><p>Mostly No Drop</p><p>If Drop - 30 Days Refill</p>`; break;
        case "7002":
            details = `<p>Start: 0-1H</p><p>Speed: 5K-50K/Day</p><p>Quality: REAL</p><p>Refill: NOT</p><p>Average: 4 Hours 35 Mins</p><p>🔥 SPEED CAN VARY DUE TO SERVER LOAD</p><p>🔥 FOR MONETIZATION</p><p>🔥 INCREASES ONLY VIDEO PLAYS</p>`; break;
        case "7003":
            details = `<p>No Refill</p><p>Speed: 100-5K / Day</p><p>🔥 Speed Can Vary Anytime</p><p>🔥 No Guarantee Service</p>`; break;
        case "7004":
            details = `<p>Start: 0-1H</p><p>Speed: 1K-2K / Day</p><p>Quality: REAL</p><p>Refill: 30 Days</p><p>Average: 5 Mins</p><p>🔥 Works on All Pages</p><p>🔥 SUPER FAST</p><p>🔥 GLOBAL QUALITY</p><p>🔥 GUARANTEE 30 DAYS (after that can drop up to 30%)</p>`; break;
        case "7005":
            details = `<p>Start: 0-3H</p><p>Speed: 120K / Day</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>🔥 NORMAL SPEED</p><p>🔥 Lifetime Guarantee</p><p>🔥 Delays possible during overload</p>`; break;
        case "7006":
            details = `<p>Start: 0-1H</p><p>Speed: 50K-500K / Day</p><p>Quality: REAL</p><p>Refill: NON DROP</p><p>Average: 25 Mins</p><p>🔥 Shares Update in 4-6 Hours Post Completion</p><p>🔥 FAST & CHEAP</p><p>🔥 NO REFILL IF DROP</p>`; break;
        case "7007":
            details = `<p>Start: 0-6H</p><p>Speed: 1K-3K / Day</p><p>Refill: 30 Days</p><p>🔥 INDIAN MIX (Includes BD & Others)</p><p>🔥 QUALITY MAY VARY ON UPDATE</p><p>🔥 NOT PURE INDIAN</p>`; break;
        case "7008":
            details = `<p>Start: 0-24H</p><p>Speed: 50K-500K / Day</p><p>Stable</p><p>🔥 Monetizable</p><p>🔥 Min: 500, Max: 10M</p>`; break;
        case "7009":
            details = `<p>Start: 0-24H</p><p>Speed: 50K-500K / Day</p><p>Stable</p><p>🔥 Monetizable</p><p>🔥 Min: 500, Max: 10M</p>`; break;
        case "7010":
            details = `<p>Start: 15-20 Mins</p><p>🔥 Can Drop After Live</p><p>🔥 Unstable</p><p>🔥 Views Increase by 60% - 120% of Ordered</p>`; break;

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
