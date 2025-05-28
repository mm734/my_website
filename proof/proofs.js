// Dynamically load proofs — you just update this array with filenames
const imageList = [
    "proof1.JPG",
    "proof2.JPG",
    "proof3.jpg",
    "proof4.jpg",
    "proof5.jpg"
    // Add more images here as you upload daily
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

imageList.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `${filename}`; // All images should go inside 'proofs' folder
    img.alt = "Proof of completed order";
    img.onclick = () => openModal(img.src);
    gallery.appendChild(img);
});


function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}