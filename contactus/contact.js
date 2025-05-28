function openLink(platform) {
  let links = {
    whatsapp: "https://wa.me/1234567890",      // Replace with your actual number
    instagram: "https://www.instagram.com/yourprofile", // Replace with your Instagram profile
    telegram: "https://t.me/yourusername"       // Replace with your Telegram username
  };

  window.open(links[platform], '_blank');
}
