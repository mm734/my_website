
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
        { id: "188341", name: "New Services" },
    ],
    popularServices: [
        { id: "5023", name: "Twitter Followers" },
        { id: "5024", name: "YouTube Subscribers" },
    ],
    exclusiveServices: [

    ],
    instagramServices: [
        { id: "5001", name: "🎦🎥Instagram VIEWS + REELS + IGTV | 𝐒𝐩𝐞𝐞𝐝 : 10M/𝐃 | INSTANT🔥🔥 - ₹7.00 per 1000 " },
        { id: "5002", name: "🎦🎥Instagram VIEWS + REELS + IGTV | 𝐒𝐩𝐞𝐞𝐝 : 1M/𝐃 | HIGH QUALITY🔥🔥 - ₹10.00 per 1000" },
        { id: "5003", name: "❣️ Instagram Likes [BOTS] NO DP | 5K-10K/D | NO REFILL - CHEAPEST ON MARKET - ₹9.00 per 1000" },
        { id: "5004", name: "❣️ Instagram Likes [POST/REELS/IGTV] [BOT MIX PROFILES] NO DP- ₹19.00 per 1000" },
        { id: "5005", name: "❣️ Instagram Likes [𝟏𝟎𝟎% 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏]| 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 - HQ🔥🔥 - ₹49.00 per 1000" },
        { id: "5006", name: "🥇🇮🇳 Instagram Likes [Power] [𝑰𝑵𝑫𝑰𝑨𝑵] [𝙎𝙏𝙊𝙍𝙄𝙀𝙎 + 𝙍𝙀𝘼𝙇 𝘼𝘾𝙏𝙄𝙑𝙀] - - ₹103.00 per 1000" },
        { id: "5007", name: "🥇🇮🇳 𝐍𝐄𝐖 Instagram Likes [𝑰𝑵𝑫𝑰𝑨𝑵] - INDIAN LIKES PREMIUM - RECOMMENDED 👌👌🔥🔥 - ₹109.75 per 1000" },
        { id: "5008", name: "🥇🇮🇳 Instagram Likes [Power] [𝑰𝑵𝑫𝑰𝑨𝑵] [𝐑𝐄𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 𝐕𝐈𝐀 𝐀𝐃𝐒] [100% 𝑵𝑶𝑵 𝑫𝑹𝑶𝑷] - MORE GROW PROFILE🔥🔥 - ₹199.00 per 1000" },
        { id: "5009", name: " 💥 Instagram Followers [MIXED] FLAG OFF ONLY - NO REFILL 🎉 - ₹89.00 per 1000" },
        { id: "5010", name: "💥 Instagram Followers | 𝐀𝐋𝐋 𝐀𝐂𝐂𝐎𝐔𝐍𝐓𝐒 | 𝐌𝐈𝐗 !! | 𝐅𝐀𝐒𝐓 | 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 🔥🔥 - 30 DAYS REFILL - ₹149.908 per 1000" },
        { id: "5011", name: "💥 Instagram Followers | 𝐀𝐋𝐋 𝐀𝐂𝐂𝐎𝐔𝐍𝐓𝐒 | 𝐌𝐈𝐗 !! | 𝐅𝐀𝐒𝐓 | 𝐒𝐏𝐄𝐄𝐃 : 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 🔥🔥 - 90 DAYS REFILL - ₹169.908 per 1000" },
        { id: "5012", name: "💥 𝐍𝐄𝐖 Instagram Followers | 𝐀𝐋𝐋 𝐀𝐂𝐂𝐎𝐔𝐍𝐓𝐒 | 𝐍𝐎𝐍 𝐃𝐑𝐎𝐏 || 𝐎𝐋𝐃 𝐀𝐂𝐎𝐔𝐍𝐓𝐒| 𝐒𝐔𝐏𝐄𝐑 𝐅𝐀𝐒𝐓 | 𝐈𝐍𝐒𝐓𝐀𝐍𝐓 🚀 - 365 DAYS REFILL🔥🔥♻️ - ₹249.63 per 1000" },
        { id: "5013", name: "💥 Instagram Followers [𝐀𝐋𝐋 𝐋𝐈𝐍𝐊𝐒] |🇮🇳𝐈𝐍𝐃𝐈𝐀𝐍 𝐌𝐈𝐗 + 𝐆𝐋𝐎𝐁𝐀𝐋!!| 𝐒𝐏𝐄𝐄𝐃 : 5𝟎𝐊/𝐃 - 365 DAYS REFILL ♻️🔥🔥 - ₹299.72 per 1000" },
        { id: "5014", name: "💥🇮🇳 Instagram Followers Real [𝑰𝑵𝑫𝑰𝑨𝑵] + 𝐒𝐓𝐎𝐑𝐈𝐄𝐒 & 𝐇𝐈𝐆𝐇𝐋𝐈𝐆𝐇𝐓𝐒 🔥 🔥 - LIFETIME 🔥 - ₹455.19 per 1000" },
        { id: "5015", name: " ✉️ Instagram Comment [CUSTOM] - INDIAN MIX 🔥 - START : 24H + - ₹299.141 per 1000" },
        { id: "5016", name: "🌍Instagram Story [Views + Reach] - BEST🔥🔥 - ₹39.874 per 1000" },
        { id: "5022", name: "🌍Instagram Story [Views] - BEST🔥 - ₹35.558 per 1000" },
        { id: "5017", name: "🌍Instagram Story [POLL VOTE] - [YES] - ₹69.009 per 1000" },
        { id: "5018", name: "🌍Instagram Story [POLL VOTE] - [NO] - ₹69.009 per 1000" },
        { id: "5019", name: "🌍 Instagram Post / Reels [REACH + IMPRESSIONS] - CHEAPEST - ₹36.28 per 1000" },
        { id: "5020", name: "🌍 Instagram Saves [Post / Reels] - Fast🔥 - ₹39.20 per 1000" },
        { id: "5021", name: " 📈 Instagram [REEL /POST] - SHARES - LIFETIME - MAIN PROVIDER🔥🔥 - ₹39.807 per 1000" },
    ],
    youtubeServices: [

    ],
    telegramServices: [

    ],
    tiktokServices: [

    ],
    facebookServices: [

    ],
    spotifyServices: [

    ],
    binstagramServices: [

    ],
    byoutubeServices: [

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
            details = `<p>Start: 0-1H</p><p>Speed: 50K-100K / Day</p><p>Quality: MIX</p><p>Refill: 30 Days</p><p>Average: 25 Mins</p><br><p>📢📌 𝐓𝐔𝐑𝐍 𝐎𝐅𝐅 𝐅𝐋𝐀𝐆 𝐑𝐄𝐕𝐈𝐄𝐖 𝐓𝐎 𝐆𝐄𝐓 𝟓𝟎𝐊-𝟏𝟎𝟎𝐊/𝐃 𝐒𝐏𝐄𝐄𝐃</p><p>📌𝐓𝐔𝐑𝐍 𝐎𝐍 𝐅𝐋𝐀𝐆 𝐑𝐄𝐕𝐈𝐄𝐖 𝐓𝐎 𝐆𝐄𝐓 𝟏𝟎𝟎-𝟓𝟎𝟎/𝐃 𝐒𝐏𝐄𝐄𝐃</p><br><p>Disable 'Mark for Review' before ordering Followers</p><p>STEPS</p><p>📌 1. Go to 'Settings and Actions'</p><p>📌 2. Select 'Invite and follow friends'❗❗❗❗</p> <p>📌 3. Disable Mark for Review❗❗❗❗<br><p>🔥INDIAN MIX QUALITY FOLLOWERS🔥</p><p>🔥 ACCOUNTS WILL HAVE POSTS + GOOD PROFILES ALSO</p><p>🔥 HIGH SPEED</p><p>🔥 IF YOUR ORDER IS SLOW - KINDLY TURN OFF YOUR FLAG FOR REVIEW</p><br><p>📌 𝐑𝐄𝐅𝐈𝐋𝐋 & 𝐃𝐑𝐎𝐏 :</p><p>🔆𝗗𝗿𝗼𝗽 𝗥𝗮𝘁𝗶𝗼 : 0-15% (On New Profiles Only , If you have high amount of Followers , We dont gurantee this percent , your old followers can drop )</p><p>🔆 𝗥𝗲𝗳𝗶𝗹𝗹 : 30 Days Refill only !!</p><p>🆘NOTE - : If you old followers dropping too much , we dont refill strictly !</p>`; break;
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
