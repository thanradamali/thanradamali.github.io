// ฟังก์ชันเปิด Modal
function openModal(imageSrc, title, price) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('myModal').style.display = "block";
}

// ฟังก์ชันปิด Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
